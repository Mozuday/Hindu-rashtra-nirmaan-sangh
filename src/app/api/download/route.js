import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name") || "";
    const father = searchParams.get("father") || "";
    const state = searchParams.get("state") || "";
    const id = searchParams.get("id") || "";

    const filePath = path.join(
      process.cwd(),
      "src",
      "templates",
      "certificate.html"
    );

    let html = fs.readFileSync(filePath, "utf8");

    html = html
      .replace("{{name}}", name)
      .replace("{{father}}", father)
      .replace("{{state}}", state)
      .replace("{{id}}", id)
      .replace("{{date}}", new Date().toLocaleDateString("en-IN"));

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="certificate.pdf"',
      },
    });
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}