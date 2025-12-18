// import express from "express";
// import cors from "cors";
// import puppeteer from "puppeteer-core";
// import chromium from "@sparticuz/chromium";
// import * as cheerio from "cheerio";
// import Groq from "groq-sdk";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// app.post("/api/analyze", async (req, res) => {
//   try {
//     const { url } = req.body;

//     const browser = await puppeteer.launch({
//       executablePath: await chromium.executablePath(),
//       headless: chromium.headless,
//       args: chromium.args,
//       defaultViewport: chromium.defaultViewport,
//     });

//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "networkidle2" });

//     const html = await page.content();
//     await browser.close();

//     const $ = cheerio.load(html);
//     let text = $("body").text().replace(/\s+/g, " ").trim();

//     const buzzwords = [
//       "ai-powered", "artificial intelligence", "revolutionary",
//       "cutting-edge", "next-gen", "innovation", "empowers",
//       "synergy", "scalable", "robust", "transformative"
//     ];

//     const found = buzzwords.filter((b) => text.toLowerCase().includes(b));
//     const words = text.split(" ").length;
//     const buzzScore = Math.min(100, Math.round((found.length / words) * 3000));

//     const prompt = `
//       Analyze the following startup website text and return ONLY valid JSON. 
//       Do NOT include explanations, markdown, or extra text outside the JSON.

//       TEXT:
//       "${text.substring(0, 5000)}"

//       Return EXACTLY this JSON structure with strictly these types:

//       {
//         "fakeAIClaimsScore": number,         // integer 0 to 100
//         "gptWrapperProbability": number,     // integer 0 to 100
//         "kpiVaguenessScore": number,         // integer 0 to 100
//         "shouldYouInterview": "Yes" | "No" | "Maybe",
//         "explanation": "string"              // short roast explaining why
//       }

//       Requirements:
//       - All score values must be integers between 0 and 100.
//       - "shouldYouInterview" must be EXACTLY one of: "Yes", "No", "Maybe".
//       - Do NOT include commentary outside the JSON.
//       - The JSON must be valid and parseable.

//       `;

//     const llm = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0,
//       response_format: { type: "json_object" }
//     });

//     const output = JSON.parse(llm.choices[0].message.content);

//     return res.json({
//       success: true,
//       buzzwordScore: buzzScore,
//       ...output,
//     });

//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server on ${PORT}`));


import express from "express";
import cors from "cors";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import * as cheerio from "cheerio";
import Groq from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (_, res) => {
  res.json({ status: "Hype Detector backend running 🚀" });
});

/* ---------------- ANALYZE ENDPOINT ---------------- */
// app.post("/api/analyze", async (req, res) => {
//   try {
//     const { url } = req.body;

//     if (!url || !url.startsWith("http")) {
//       return res.status(400).json({ error: "Valid URL is required" });
//     }

//     /* -------- Launch Headless Browser -------- */
//     const browser = await puppeteer.launch({
//       executablePath: await chromium.executablePath(),
//       headless: chromium.headless,
//       args: chromium.args,
//       defaultViewport: chromium.defaultViewport,
//     });

//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

//     const html = await page.content();
//     await browser.close();

//     /* -------- Clean & Extract Real Text -------- */
//     const $ = cheerio.load(html);

//     // Remove non-content junk
//     $("script").remove();
//     $("style").remove();
//     $("noscript").remove();
//     $("svg").remove();
//     $("nav").remove();
//     $("footer").remove();
//     $("header").remove();
//     $("iframe").remove();

//     // Prefer main marketing content
//     let text = $("main").text();

//     if (!text || text.length < 300) {
//       text = $("body").text();
//     }

//     text = text.replace(/\s+/g, " ").trim();

//     if (text.length < 200) {
//       return res.status(400).json({
//         error: "Not enough readable content found on this website",
//       });
//     }

//     /* -------- Simple Buzzword Heuristic -------- */
//     const buzzwords = [
//       "ai-powered",
//       "artificial intelligence",
//       "machine learning",
//       "deep learning",
//       "revolutionary",
//       "cutting-edge",
//       "next-gen",
//       "innovation",
//       "transformative",
//       "scalable",
//       "synergy",
//       "autonomous",
//       "intelligent platform",
//       "powered by ai",
//     ];

//     const lower = text.toLowerCase();
//     const found = buzzwords.filter((b) => lower.includes(b));
//     const wordCount = text.split(" ").length;

//     const buzzwordScore = Math.min(
//       100,
//       Math.round((found.length / wordCount) * 4000)
//     );

//     /* -------- LLM PROMPT (STRICT) -------- */
//     const prompt = `
// You are evaluating a STARTUP MARKETING WEBSITE.

// Your task is to detect:
// - AI hype
// - vague claims
// - GPT-wrapper behavior
// - meaningless KPIs
// - buzzword abuse

// Focus ONLY on:
// - marketing language
// - product claims
// - value propositions
// - AI-related promises

// IGNORE COMPLETELY:
// - CSS
// - layout
// - typography
// - UI frameworks
// - HTML structure
// - code or styling

// WEBSITE TEXT:
// "${text.substring(0, 4500)}"

// Return ONLY valid JSON in EXACTLY this format:

// {
//   "fakeAIClaimsScore": number,
//   "gptWrapperProbability": number,
//   "kpiVaguenessScore": number,
//   "shouldYouInterview": "Yes" | "No" | "Maybe",
//   "explanation": "short roast explaining why"
// }

// Rules:
// - Scores must be integers from 0–100
// - Do NOT mention CSS, UI, or code
// - Roast the BUSINESS, not the website design
// - No markdown, no commentary outside JSON
// `;

//     /* -------- Call Groq -------- */
//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0,
//       response_format: { type: "json_object" },
//     });

//     const output = JSON.parse(completion.choices[0].message.content);

//     /* -------- Final Response -------- */
//     return res.json({
//       success: true,
//       buzzwordScore,
//       ...output,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       error: "Analysis failed. Try another website.",
//     });
//   }
// });

app.post("/api/analyze", async (req, res) => {
  const start = Date.now();

  try {
    const { url } = req.body;

    if (!url || !url.startsWith("http")) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    const browser = await puppeteer.launch({
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
    });

    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 20000, // ⏱ prevent hanging
    });

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);
    const text = $("body").text().replace(/\s+/g, " ").trim().slice(0, 5000);

    if (!text) {
      return res.status(400).json({ error: "No readable text found" });
    }

    // TEMP response (no Groq yet)
    return res.json({
      success: true,
      buzzwordScore: 70,
      fakeAIClaimsScore: 60,
      gptWrapperProbability: 80,
      kpiVaguenessScore: 65,
      shouldYouInterview: "Maybe",
      explanation: "Marketing-heavy copy with limited technical depth.",
      debugMs: Date.now() - start,
    });

  } catch (err) {
    console.error("ANALYZE ERROR:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
});


/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Hype Detector running on port ${PORT}`)
);
