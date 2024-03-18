import puppeteer from "puppeteer";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.PAGE_URL || "https://example.com");
  await browser.close();
})();
