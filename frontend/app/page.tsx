"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  async function analyzeSite() {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("https://backend-lively-silence-4780.fly.dev/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error);

      setData(json);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">

      <h1 className="text-4xl font-bold mt-10">🚨 Hype Detector</h1>
      <p className="text-gray-400 mt-2">Analyze startup websites for AI hype, BS, and GPT wrappers</p>

      {/* INPUT CARD */}
      <div className="mt-10 w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800">
        <label className="text-sm text-gray-400">Enter website URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
        />

        <button
          onClick={analyzeSite}
          disabled={loading}
          className="w-full mt-4 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* ERROR */}
      {error && <p className="text-red-400 mt-4">{error}</p>}

      {/* RESULTS */}
      {data && (
        <div className="mt-10 w-full max-w-2xl">
          
          {/* SUMMARY */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
            <h2 className="text-2xl font-semibold">📊 Hype Score Breakdown</h2>
            <p className="text-gray-400 mt-1">Based on website content analysis</p>

            <ScoreBar label="Buzzword Score" value={data.buzzwordScore} />
            <ScoreBar label="Fake AI Claims Score" value={data.fakeAIClaimsScore} />
            <ScoreBar label="GPT Wrapper Probability" value={data.gptWrapperProbability} />
            <ScoreBar label="KPI Vagueness Score" value={data.kpiVaguenessScore} />

            {/* INTERVIEW DECISION */}
            <div className="mt-6 p-4 rounded-lg bg-gray-800 border border-gray-700">
              <span className="text-sm text-gray-400">Should You Interview?</span>
              <p className={`text-xl font-bold mt-1 ${
                data.shouldYouInterview === "Yes" ? "text-green-400" :
                data.shouldYouInterview === "Maybe" ? "text-yellow-400" :
                "text-red-400"
              }`}>
                {data.shouldYouInterview}
              </p>
            </div>

            {/* ROAST CARD */}
            <div className="mt-6 p-5 rounded-xl bg-red-900/20 border border-red-700/50">
              <h3 className="text-xl font-semibold mb-2">💀 Roast Summary</h3>
              <p className="text-red-300">{data.explanation}</p>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}

/* ---------------- SCORE BAR COMPONENT ---------------- */
function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mt-5">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">{value}/100</span>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-lg overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
