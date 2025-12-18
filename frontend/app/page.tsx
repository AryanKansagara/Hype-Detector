
// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState("");

//   async function analyzeSite() {
//     setLoading(true);
//     setError("");
//     setData(null);

//     try {
//       const backend =
//         process.env.NEXT_PUBLIC_BACKEND_URL ||
//         "http://localhost:8080"; // fallback for local dev

//       const res = await fetch(`${backend}/api/analyze`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ url }),
//       });

//       if (!res.ok) {
//         const errJson = await res.json();
//         throw new Error(errJson.error || "Unknown server error");
//       }

//       const json = await res.json();
//       setData(json);
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     }

//     setLoading(false);
//   }

//   return (
//     <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">

//       <h1 className="text-4xl font-bold mt-10">🚨 Hype Detector</h1>
//       <p className="text-gray-400 mt-2">
//         Analyze startup websites for AI hype, BS, and GPT wrappers
//       </p>

//       {/* INPUT CARD */}
//       <div className="mt-10 w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-800">
//         <label className="text-sm text-gray-400">Enter website URL</label>
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="https://example.com"
//           className="w-full mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 outline-none"
//         />

//         <button
//           onClick={analyzeSite}
//           disabled={loading}
//           className="w-full mt-4 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition disabled:opacity-50"
//         >
//           {loading ? "Analyzing..." : "Analyze"}
//         </button>
//       </div>

//       {/* ERROR */}
//       {error && <p className="text-red-400 mt-4">{error}</p>}

//       {/* RESULTS */}
//       {data && (
//         <div className="mt-10 w-full max-w-2xl">
          
//           {/* SUMMARY */}
//           <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg">
//             <h2 className="text-2xl font-semibold">📊 Hype Score Breakdown</h2>
//             <p className="text-gray-400 mt-1">Based on website content analysis</p>

//             <ScoreBar label="Buzzword Score" value={data.buzzwordScore} />
//             <ScoreBar label="Fake AI Claims Score" value={data.fakeAIClaimsScore} />
//             <ScoreBar label="GPT Wrapper Probability" value={data.gptWrapperProbability} />
//             <ScoreBar label="KPI Vagueness Score" value={data.kpiVaguenessScore} />

//             {/* INTERVIEW DECISION */}
//             <div className="mt-6 p-4 rounded-lg bg-gray-800 border border-gray-700">
//               <span className="text-sm text-gray-400">Should You Interview?</span>
//               <p
//                 className={`text-xl font-bold mt-1 ${
//                   data.shouldYouInterview === "Yes"
//                     ? "text-green-400"
//                     : data.shouldYouInterview === "Maybe"
//                     ? "text-yellow-400"
//                     : "text-red-400"
//                 }`}
//               >
//                 {data.shouldYouInterview}
//               </p>
//             </div>

//             {/* ROAST CARD */}
//             <div className="mt-6 p-5 rounded-xl bg-red-900/20 border border-red-700/50">
//               <h3 className="text-xl font-semibold mb-2">💀 Roast Summary</h3>
//               <p className="text-red-300">{data.explanation}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// /* ---------------- SCORE BAR COMPONENT ---------------- */
// function ScoreBar({ label, value }: { label: string; value: number }) {
//   return (
//     <div className="mt-5">
//       <div className="flex justify-between mb-1">
//         <span className="text-gray-300">{label}</span>
//         <span className="text-gray-400">{value}/100</span>
//       </div>

//       <div className="w-full h-3 bg-gray-800 rounded-lg overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
//           style={{ width: `${value}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";

// export default function Home() {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState("");
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   async function analyzeSite() {
//     setLoading(true);
//     setError("");
//     setData(null);

//     try {
//       // Simulated response for demo
//       await new Promise((resolve) => setTimeout(resolve, 2000));
      
//       setData({
//         buzzwordScore: 85,
//         fakeAIClaimsScore: 72,
//         gptWrapperProbability: 91,
//         kpiVaguenessScore: 68,
//         shouldYouInterview: "Maybe",
//         explanation: "This startup's website is dripping with buzzwords like 'revolutionary AI' and 'paradigm-shifting ML algorithms' while offering suspiciously little technical detail. Their demo looks remarkably similar to ChatGPT with a different color scheme. The KPIs mentioned are vague ('10x improvement') without backing data. Proceed with caution and ask pointed technical questions."
//       });
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     }

//     setLoading(false);
//   }

//   // const tiltX = (mousePos.y - window.innerHeight / 2) / 50;
//   // const tiltY = (mousePos.x - window.innerWidth / 2) / 50;
//   const tiltX =
//   typeof window !== "undefined"
//     ? (mousePos.y - window.innerHeight / 2) / 50
//     : 0;

//   const tiltY =
//     typeof window !== "undefined"
//       ? (mousePos.x - window.innerWidth / 2) / 50
//       : 0;


//   return (
//     <main className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
//         <div 
//           className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${mousePos.x / 20}px, ${mousePos.y / 20}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
//           style={{
//             transform: `translate(${-mousePos.x / 20}px, ${-mousePos.y / 20}px)`,
//             animationDelay: "1s"
//           }}
//         ></div>
        
//         {/* Grid Pattern */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
//             backgroundSize: "50px 50px",
//             transform: `perspective(1000px) rotateX(60deg) scale(2)`,
//             transformOrigin: "center top"
//           }}
//         ></div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center p-6">
//         {/* Header with 3D effect */}
//         <div 
//           className="mt-10 text-center"
//           style={{
//             transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
//           }}
//         >
//           <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-pulse">
//             🚨 Hype Detector
//           </h1>
//           <p className="text-gray-400 mt-4 text-lg tracking-wide">
//             Analyze startup websites for AI hype, BS, and GPT wrappers
//           </p>
//         </div>

//         {/* 3D Input Card */}
//         <div 
//           className="mt-12 w-full max-w-xl perspective-1000"
//           style={{
//             transform: `perspective(1000px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg)`,
//             transition: "transform 0.1s ease-out"
//           }}
//         >
//           <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"></div>
            
//             <label className="relative text-sm text-gray-400 uppercase tracking-wider">
//               Enter website URL
//             </label>
//             <input
//               type="text"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="https://example.com"
//               className="relative w-full mt-3 p-4 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-600 transition-all duration-300 backdrop-blur-sm"
//             />

//             <button
//               onClick={analyzeSite}
//               disabled={loading}
//               className="relative w-full mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 disabled:hover:scale-100"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                   Analyzing...
//                 </span>
//               ) : (
//                 "Analyze"
//               )}
//             </button>
//           </div>
//         </div>

//         {/* ERROR */}
//         {error && (
//           <div className="mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl backdrop-blur-sm animate-pulse">
//             <p className="text-red-400">{error}</p>
//           </div>
//         )}

//         {/* RESULTS with 3D Cards */}
//         {data && (
//           <div className="mt-12 w-full max-w-3xl animate-fade-in">
//             <div 
//               className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
//               style={{
//                 transform: `perspective(1000px) rotateX(${tiltX * 0.3}deg) rotateY(${tiltY * 0.3}deg)`,
//                 transition: "transform 0.1s ease-out"
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"></div>
              
//               <h2 className="relative text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                 📊 Hype Score Breakdown
//               </h2>
//               <p className="relative text-gray-500 mt-2">Based on website content analysis</p>

//               <div className="relative space-y-6 mt-6">
//                 <ScoreBar label="Buzzword Score" value={data.buzzwordScore} color="purple" />
//                 <ScoreBar label="Fake AI Claims Score" value={data.fakeAIClaimsScore} color="pink" />
//                 <ScoreBar label="GPT Wrapper Probability" value={data.gptWrapperProbability} color="indigo" />
//                 <ScoreBar label="KPI Vagueness Score" value={data.kpiVaguenessScore} color="blue" />
//               </div>

//               {/* Interview Decision 3D Card */}
//               <div className="relative mt-8 p-6 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
//                 <span className="text-sm text-gray-500 uppercase tracking-wider">
//                   Should You Interview?
//                 </span>
//                 <p
//                   className={`text-3xl font-bold mt-2 ${
//                     data.shouldYouInterview === "Yes"
//                       ? "text-green-400"
//                       : data.shouldYouInterview === "Maybe"
//                       ? "text-yellow-400"
//                       : "text-red-400"
//                   }`}
//                 >
//                   {data.shouldYouInterview}
//                 </p>
//               </div>

//               {/* Roast Card with 3D effect */}
//               <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
//                 <h3 className="text-2xl font-bold mb-3 text-red-400">💀 Roast Summary</h3>
//                 <p className="text-red-200/80 leading-relaxed">{data.explanation}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </main>
//   );
// }

// function ScoreBar({ label, value, color }: { label: string; value: number; color: string }) {
//   const [animated, setAnimated] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimated(value), 100);
//     return () => clearTimeout(timer);
//   }, [value]);

//   const colorMap: Record<string, string> = {
//     purple: "from-purple-500 to-purple-600",
//     pink: "from-pink-500 to-rose-600",
//     indigo: "from-indigo-500 to-blue-600",
//     blue: "from-blue-500 to-cyan-600"
//   };

//   return (
//     <div className="transform hover:scale-105 transition-all duration-300">
//       <div className="flex justify-between mb-2">
//         <span className="text-gray-300 font-medium">{label}</span>
//         <span className="text-gray-500 font-mono">{value}/100</span>
//       </div>

//       <div className="relative w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/10 shadow-inner">
//         <div
//           className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colorMap[color]} transition-all duration-1000 ease-out shadow-lg`}
//           style={{ width: `${animated}%` }}
//         >
//           <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//         </div>
        
//         {/* Shine effect */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//           style={{
//             animation: "shine 2s infinite",
//             // animationDelay: `${Math.random()}s`
//             animationDelay: `${value / 100}s`
//           }}
//         ></div>
//       </div>

//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(200%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";

/* =========================
   MAIN PAGE
========================= */
export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  /* ---- hydration-safe mount ---- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---- mouse tracking (client only) ---- */
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  /* ---- 3D tilt (hydration safe) ---- */
  const tiltX =
    mounted ? (mousePos.y - window.innerHeight / 2) / 50 : 0;

  const tiltY =
    mounted ? (mousePos.x - window.innerWidth / 2) / 50 : 0;

  /* =========================
     BACKEND CALL
  ========================= */
  // async function analyzeSite() {
  //   if (!url) {
  //     setError("Please enter a valid URL");
  //     return;
  //   }

  //   setLoading(true);
  //   setError("");
  //   setData(null);

  //   try {
  //     const backend =
  //       process.env.NEXT_PUBLIC_BACKEND_URL ||
  //       "http://localhost:8080";

  //     const res = await fetch(`${backend}/api/analyze`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ url }),
  //     });

  //     const json = await res.json();
  //     if (!res.ok) throw new Error(json.error || "Server error");

  //     setData(json);
  //   } catch (err: any) {
  //     setError(err.message || "Something went wrong");
  //   }

  //   setLoading(false);
  // }
  async function analyzeSite() {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const backend =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

      const res = await fetch(`${backend}/api/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Backend error");
      }

      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  }


  /* =========================
     UI
  ========================= */
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center p-6">
        {/* HEADER */}
        <div
          className="mt-10 text-center"
          style={{
            transform: mounted
              ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
              : "none",
          }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            🚨 Hype Detector
          </h1>
          <p className="text-gray-400 mt-4">
            Detect AI hype, GPT wrappers, and startup BS
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="mt-12 w-full max-w-xl">
          <div className="bg-gray-900/80 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
            <label className="text-sm text-gray-400 uppercase tracking-wider">
              Website URL
            </label>

            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full mt-3 p-4 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 outline-none"
            />

            <button
              onClick={analyzeSite}
              disabled={loading}
              className="w-full mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-6 text-red-400 bg-red-500/10 border border-red-500/40 p-4 rounded-xl">
            {error}
          </div>
        )}

        {/* RESULTS */}
        {data && (
          <div className="mt-12 w-full max-w-3xl">
            <div className="bg-gray-900/80 p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
              <h2 className="text-3xl font-bold mb-6">
                📊 Hype Score Breakdown
              </h2>

              <ScoreBar label="Buzzword Score" value={data.buzzwordScore} />
              <ScoreBar label="Fake AI Claims" value={data.fakeAIClaimsScore} />
              <ScoreBar label="GPT Wrapper Probability" value={data.gptWrapperProbability} />
              <ScoreBar label="KPI Vagueness" value={data.kpiVaguenessScore} />

              <div className="mt-6 p-4 bg-black/50 rounded-xl">
                <span className="text-gray-400">Should You Interview?</span>
                <p className="text-2xl font-bold mt-1">
                  {data.shouldYouInterview}
                </p>
              </div>

              <div className="mt-6 p-5 bg-red-900/20 border border-red-500/30 rounded-xl">
                <h3 className="text-xl font-bold mb-2">💀 Roast</h3>
                <p className="text-red-200">{data.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* =========================
   SCORE BAR
========================= */
function ScoreBar({ label, value }: { label: string; value: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 100);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>
      <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
