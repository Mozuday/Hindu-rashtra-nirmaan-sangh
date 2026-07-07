import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get("name");
  const father = searchParams.get("father");
  const state = searchParams.get("state");
  const id = searchParams.get("id");

  // 🔥 Load HTML file
  const filePath = path.join(process.cwd(), "src/templates/certificate.html");
  let html = fs.readFileSync(filePath, "utf-8");

  // 🔥 Replace placeholders
  html = html
    .replace("{{name}}", name)
    .replace("{{father}}", father)
    .replace("{{state}}", state)
    .replace("{{id}}", id)
    .replace("{{date}}", new Date().toLocaleDateString());

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=certificate.pdf",
    },
  });
}