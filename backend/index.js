import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import Groq from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/api/analyze", async (req, res) => {
  try {
    const { url } = req.body;

    // Launch browser
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

    const html = await page.content();
    await browser.close();

    // Extract text
    const $ = cheerio.load(html);
    let text = $("body").text().replace(/\s+/g, " ").trim();

    // Buzzwords
    const buzzwords = [
      "ai-powered", "artificial intelligence", "revolutionary",
      "cutting-edge", "next-gen", "innovation", "empowers",
      "synergy", "scalable", "robust", "transformative"
    ];

    const lower = text.toLowerCase();
    const found = buzzwords.filter(w => lower.includes(w));

    const buzzScore = Math.min(100, Math.round((found.length / text.split(" ").length) * 3000));

    // LLM Prompt
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
      model: "llama3-8b-8192",
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

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server running on port", PORT));
