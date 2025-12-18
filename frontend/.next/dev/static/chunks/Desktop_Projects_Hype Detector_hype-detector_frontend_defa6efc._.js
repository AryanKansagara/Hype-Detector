(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function Home() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ---- hydration-safe mount ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
        }
    }["Home.useEffect"], []);
    /* ---- mouse tracking (client only) ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!mounted) return;
            const handleMouseMove = {
                "Home.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["Home.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        mounted
    ]);
    /* ---- 3D tilt (hydration safe) ---- */ const tiltX = mounted ? (mousePos.y - window.innerHeight / 2) / 50 : 0;
    const tiltY = mounted ? (mousePos.x - window.innerWidth / 2) / 50 : 0;
    /* =========================
     BACKEND CALL
  ========================= */ // async function analyzeSite() {
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
            const backend = ("TURBOPACK compile-time value", "https://hype-detector-production.up.railway.app") || "http://localhost:8080";
            const res = await fetch(`${backend}/api/analyze`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url
                })
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Backend error");
            }
            const json = await res.json();
            setData(json);
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
        setLoading(false);
    }
    /* =========================
     UI
  ========================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-black text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 text-center",
                        style: {
                            transform: mounted ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent",
                                children: "🚨 Hype Detector"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-4",
                                children: "Detect AI hype, GPT wrappers, and startup BS"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 w-full max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/80 p-8 rounded-2xl border border-white/10 backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm text-gray-400 uppercase tracking-wider",
                                    children: "Website URL"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: url,
                                    onChange: (e)=>setUrl(e.target.value),
                                    placeholder: "https://example.com",
                                    className: "w-full mt-3 p-4 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: analyzeSite,
                                    disabled: loading,
                                    className: "w-full mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold hover:scale-105 transition disabled:opacity-50",
                                    children: loading ? "Analyzing..." : "Analyze"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-red-400 bg-red-500/10 border border-red-500/40 p-4 rounded-xl",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, this),
                    data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 w-full max-w-3xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/80 p-8 rounded-2xl border border-white/10 backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6",
                                    children: "📊 Hype Score Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                    label: "Buzzword Score",
                                    value: data.buzzwordScore
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                    label: "Fake AI Claims",
                                    value: data.fakeAIClaimsScore
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 587,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                    label: "GPT Wrapper Probability",
                                    value: data.gptWrapperProbability
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                    label: "KPI Vagueness",
                                    value: data.kpiVaguenessScore
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-black/50 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Should You Interview?"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl font-bold mt-1",
                                            children: data.shouldYouInterview
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-5 bg-red-900/20 border border-red-500/30 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-2",
                                            children: "💀 Roast"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-200",
                                            children: data.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 598,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 523,
        columnNumber: 5
    }, this);
}
_s(Home, "gI66vFOZ95Lq3yQMFfbwol+cQUY=");
_c = Home;
/* =========================
   SCORE BAR
========================= */ function ScoreBar({ label, value }) {
    _s1();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScoreBar.useEffect": ()=>{
            const t = setTimeout({
                "ScoreBar.useEffect.t": ()=>setWidth(value)
            }["ScoreBar.useEffect.t"], 100);
            return ({
                "ScoreBar.useEffect": ()=>clearTimeout(t)
            })["ScoreBar.useEffect"];
        }
    }["ScoreBar.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-sm text-gray-400 mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            value,
                            "/100"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-3 bg-black/40 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-700",
                    style: {
                        width: `${width}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                    lineNumber: 628,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 622,
        columnNumber: 5
    }, this);
}
_s1(ScoreBar, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");
_c1 = ScoreBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "ScoreBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Desktop_Projects_Hype%20Detector_hype-detector_frontend_defa6efc._.js.map