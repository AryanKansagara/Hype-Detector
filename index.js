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
      Analyze the following startup website text and return ONLY valid JSON. 
      Do NOT include explanations, markdown, or extra text outside the JSON.

      TEXT:
      "${text.substring(0, 5000)}"

      Return EXACTLY this JSON structure with strictly these types:

      {
        "fakeAIClaimsScore": number,         // integer 0 to 100
        "gptWrapperProbability": number,     // integer 0 to 100
        "kpiVaguenessScore": number,         // integer 0 to 100
        "shouldYouInterview": "Yes" | "No" | "Maybe",
        "explanation": "string"              // short roast explaining why
      }

      Requirements:
      - All score values must be integers between 0 and 100.
      - "shouldYouInterview" must be EXACTLY one of: "Yes", "No", "Maybe".
      - Do NOT include commentary outside the JSON.
      - The JSON must be valid and parseable.

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
