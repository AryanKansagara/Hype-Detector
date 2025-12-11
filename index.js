import express from "express";
import cors from "cors";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import * as cheerio from "cheerio";
import Groq from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/api/analyze", async (req, res) => {
  try {
    const { url } = req.body;

    const browser = await puppeteer.launch({
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    let text = $("body").text().replace(/\s+/g, " ").trim();

    const buzzwords = [
      "ai-powered", "artificial intelligence", "revolutionary",
      "cutting-edge", "next-gen", "innovation", "empowers",
      "synergy", "scalable", "robust", "transformative"
    ];

    const found = buzzwords.filter((b) => text.toLowerCase().includes(b));
    const words = text.split(" ").length;
    const buzzScore = Math.min(100, Math.round((found.length / words) * 3000));

    const prompt = `
Analyze this website text and return ONLY JSON.

TEXT: "${text.slice(0, 5000)}"

Return JSON:
{
 "fakeAIClaimsScore": 0-100,
 "gptWrapperProbability": 0-100,
 "kpiVaguenessScore": 0-100,
 "shouldYouInterview": "Yes | No | Maybe",
 "explanation": "short roast explaining why"
}
`;

    const llm = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      response_format: { type: "json_object" }
    });

    const output = JSON.parse(llm.choices[0].message.content);

    return res.json({
      success: true,
      buzzwordScore: buzzScore,
      ...output,
    });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
