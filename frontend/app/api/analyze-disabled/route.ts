// import axios from "axios";
// import * as cheerio from "cheerio";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { url } = await req.json();

//     // Fetch the website
//     const response = await axios.get(url, {
//     headers: {
//         "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.9",
//     }
//     });


//     const html = response.data;
//     const $ = cheerio.load(html);

//     // Extract readable text
//     let text = $("body").text();
//     text = text.replace(/\s+/g, " ").trim();

//     return NextResponse.json({
//       success: true,
//       textSample: text.substring(0, 1200) + "...", // sample of extracted text
//     });
//   } catch (err: any) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: 500 }
//     );
//   }
// }

// import axios from "axios";
// import * as cheerio from "cheerio";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { url } = await req.json();

//     const response = await axios.get(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36",
//         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.9",
//       },
//     });

//     const html = response.data;
//     const $ = cheerio.load(html);

//     let text = $("body").text().replace(/\s+/g, " ").trim().toLowerCase();

//     // --- Buzzword Detector ---
//     const buzzwords = [
//       "ai-powered", "artificial intelligence", "revolutionary", "cutting-edge",
//       "next-gen", "innovation", "empowers", "synergy", "scalable", 
//       "robust", "transformative", "omnichannel", "seamless", "future-proof"
//     ];

//     const words = text.split(" ");
//     const found = buzzwords.filter(b => text.includes(b));
//     const buzzScore = Math.min(100, Math.round((found.length / words.length) * 3000));

//     return NextResponse.json({
//       success: true,
//       textSample: text.substring(0, 800),
//       buzzwordsFound: found,
//       buzzwordScore: buzzScore
//     });

//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }






// import * as cheerio from "cheerio";
// import { NextResponse } from "next/server";
// import Groq from "groq-sdk";

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function POST(req: Request) {
//   try {
//     const { url } = await req.json();

//     // ---------------- FETCH WEBSITE ----------------
//     const page = await fetch(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/123",
//         "Accept": "text/html",
//       },
//     });

//     if (!page.ok) throw new Error(`Fetch failed with status ${page.status}`);

//     const html = await page.text();
//     const $ = cheerio.load(html);

//     let text = $("body").text().replace(/\s+/g, " ").trim();

//     // ---------------- BUZZWORD ANALYSIS ----------------
//     const buzzwords = [
//       "ai-powered", "artificial intelligence", "revolutionary",
//       "cutting-edge", "next-gen", "innovation", "empowers",
//       "synergy", "scalable", "robust", "transformative"
//     ];

//     const lower = text.toLowerCase();
//     const found = buzzwords.filter((b) => lower.includes(b));
//     const words = text.split(" ").length;
//     const buzzScore = Math.min(100, Math.round((found.length / words) * 3000));

//     // ---------------- LLM PROMPT ----------------
//     const prompt = `
// Analyze the following startup website text and return ONLY valid JSON.
// Do NOT include markdown, backticks, or explanations.

// TEXT:
// "${text.substring(0, 5000)}"

// Return EXACTLY this JSON:
// {
//   "fakeAIClaimsScore": 0-100,
//   "gptWrapperProbability": 0-100,
//   "kpiVaguenessScore": 0-100,
//   "shouldYouInterview": "Yes | No | Maybe",
//   "explanation": "short roast explaining why"
// }
// `;

//     // ---------------- CALL GROQ ----------------
//     const llmResponse = await groq.chat.completions.create({
//       model: "llama3.1-8b-instant",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0,
//       response_format: { type: "json_object" },
//     });

//     // ---------------- SAFE JSON EXTRACTION ----------------
//     let raw = llmResponse.choices?.[0]?.message?.content ?? "";

//     if (!raw || typeof raw !== "string") {
//       throw new Error("Groq returned an empty or invalid response.");
//     }

//     let analysis;
//     try {
//       analysis = JSON.parse(raw);
//     } catch (e) {
//       // If model puts extra text, extract ONLY JSON
//       const match = raw.match(/\{[\s\S]*\}/);
//       if (!match) {
//         console.error("Invalid LLM output:", raw);
//         throw new Error("Could not extract JSON from model output.");
//       }
//       analysis = JSON.parse(match[0]);
//     }

//     // ---------------- RETURN RESULT ----------------
//     return NextResponse.json({
//       success: true,
//       textSample: text.substring(0, 800),
//       buzzwordsFound: found,
//       buzzwordScore: buzzScore,
//       ...analysis,
//     });

//   } catch (err: any) {
//     return NextResponse.json(
//       { error: err.message, stack: err.stack },
//       { status: 500 }
//     );
//   }
// }





import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import Groq from "groq-sdk";
import puppeteer from "puppeteer";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // ---------------- LAUNCH HEADLESS BROWSER ----------------
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Pretend to be a real human browser
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

    // Extract full rendered HTML (with JS executed)
    const html = await page.content();
    await browser.close();

    // ---------------- CHEERIO SCRAPING ----------------
    const $ = cheerio.load(html);
    let text = $("body").text().replace(/\s+/g, " ").trim();

    // ---------------- BUZZWORD ANALYSIS ----------------
    const buzzwords = [
      "ai-powered", "artificial intelligence", "revolutionary",
      "cutting-edge", "next-gen", "innovation", "empowers",
      "synergy", "scalable", "robust", "transformative"
    ];

    const lower = text.toLowerCase();
    const found = buzzwords.filter((b) => lower.includes(b));
    const words = text.split(" ").length;
    const buzzScore = Math.min(100, Math.round((found.length / words) * 3000));

    // ---------------- LLM PROMPT ----------------
    const prompt = `
Analyze the following startup website text and return ONLY valid JSON.

TEXT:
"${text.substring(0, 5000)}"

Return EXACTLY this JSON:
{
  "fakeAIClaimsScore": 0-100,
  "gptWrapperProbability": 0-100,
  "kpiVaguenessScore": 0-100,
  "shouldYouInterview": "Yes | No | Maybe",
  "explanation": "short roast explaining why"
}
`;

    // ---------------- CALL GROQ ----------------
    const llmResponse = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      response_format: { type: "json_object" },
    });

    // ---------------- SAFE JSON PARSE ----------------
    let raw = llmResponse.choices?.[0]?.message?.content ?? "";
    if (!raw || typeof raw !== "string") {
      throw new Error("Invalid response from Groq.");
    }

    let analysis;
    try {
      analysis = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Could not extract JSON from LLM output.");
      analysis = JSON.parse(match[0]);
    }

    // ---------------- RETURN ----------------
    return NextResponse.json({
      success: true,
      textSample: text.substring(0, 800),
      buzzwordsFound: found,
      buzzwordScore: buzzScore,
      ...analysis,
    });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}
