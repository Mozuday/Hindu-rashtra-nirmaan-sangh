import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";

export function generatePDF({ name, father, state, id }) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
        autoFirstPage: true,
      });

      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));

      // ✅ Paths
      const fontPath = path.join(process.cwd(), "public/fonts/Roboto-Regular.ttf");
      const logoPath = path.join(process.cwd(), "public/logo.png");

      // ❗ HARD CHECK (fail fast instead of silent crash)
      if (!fs.existsSync(fontPath)) {
        throw new Error("Font file missing at: " + fontPath);
      }

      // ✅ REGISTER + SET FONT BEFORE ANYTHING
      doc.registerFont("custom", fontPath);
      doc.font("custom");

      // 🎨 Background
      doc.rect(0, 0, 595, 842).fill("#fff8e1");

      // 🎨 Border
      doc
        .lineWidth(4)
        .strokeColor("#d97706")
        .rect(20, 20, 555, 802)
        .stroke();

      // 🎯 Logo
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 250, 40, { width: 80 });
      }

      doc.moveDown(3);

      // 🏆 Title
      doc
        .fillColor("#d97706")
        .fontSize(26)
        .text("Hindu Rashtra Nirmaan Sangh", {
          align: "center",
        });

      doc.moveDown();

      doc
        .fillColor("#000")
        .fontSize(18)
        .text("Membership Certificate", {
          align: "center",
        });

      doc.moveDown(2);

      // 📜 Body
      doc
        .fontSize(14)
        .fillColor("#333")
        .text("This is to certify that", {
          align: "center",
        });

      doc.moveDown();

      // 👤 Name
      doc
        .fontSize(24)
        .fillColor("#b91c1c")
        .text(name.toUpperCase(), {
          align: "center",
        });

      doc.moveDown();

      doc
        .fontSize(14)
        .fillColor("#000")
        .text(`S/o ${father}`, {
          align: "center",
        });

      doc.moveDown();

      doc.text(`State: ${state}`, { align: "center" });

      doc.moveDown();

      doc
        .fillColor("#1e40af")
        .text(`Member ID: ${id}`, {
          align: "center",
        });

      doc.moveDown(3);

      // ✍ Signature
      doc.moveTo(400, 700).lineTo(550, 700).stroke();

      doc.text("Authorized Signature", 400, 710, {
        width: 150,
        align: "center",
      });

      // 📅 Footer
      doc.fontSize(10).fillColor("#555").text(
        `Generated on: ${new Date().toLocaleDateString()}`,
        50,
        780
      );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}