"use client";

import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export default async function downloadCertificate(name = "certificate") {
  try {
    const node = document.getElementById("certificate");

    if (!node) {
      alert("Certificate not found.");
      return;
    }

    // Wait for all images to load
    const images = node.querySelectorAll("img");

    await Promise.all(
      [...images].map((img) => {
        if (img.complete) return Promise.resolve();

        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#f8f3e8",
      skipFonts: true,
    });

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1123, 794],
      compress: true,
    });

    pdf.addImage(
      dataUrl,
      "PNG",
      0,
      0,
      1123,
      794,
      undefined,
      "FAST"
    );

    pdf.save(`${name}-certificate.pdf`);
  } catch (error) {
    console.error("Certificate Download Error:", error);
    alert("Certificate download failed.");
  }
}