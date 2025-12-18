module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    setMounted(true);
}, []);
function Home() {
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    async function analyzeSite() {
        setLoading(true);
        setError("");
        setData(null);
        try {
            if (!url.trim()) throw new Error("Please enter a URL.");
            const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
            const res = await fetch(`${backend}/api/analyze`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    url: url.trim()
                })
            });
            if (!res.ok) {
                // backend might return JSON or plain text
                let message = `Request failed with status ${res.status}`;
                try {
                    const errJson = await res.json();
                    message = errJson.error || message;
                } catch  {
                    const text = await res.text();
                    if (text) message = text;
                }
                throw new Error(message);
            }
            const json = await res.json();
            setData(json);
        } catch (err) {
            setError(err?.message || "Something went wrong");
        } finally{
            setLoading(false);
        }
    }
    const tiltX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0;
    const tiltY = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-c84ed2014013bda5" + " " + "relative min-h-screen bg-black text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c84ed2014013bda5" + " " + "fixed inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translate(${mousePos.x / 20}px, ${mousePos.y / 20}px)`
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translate(${-mousePos.x / 20}px, ${-mousePos.y / 20}px)`,
                            animationDelay: "1s"
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                            backgroundSize: "50px 50px",
                            transform: `perspective(1000px) rotateX(60deg) scale(2)`,
                            transformOrigin: "center top"
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c84ed2014013bda5" + " " + "relative z-10 flex flex-col items-center p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "mt-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-c84ed2014013bda5" + " " + "text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-pulse",
                                children: "🚨 Hype Detector"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c84ed2014013bda5" + " " + "text-gray-400 mt-4 text-lg tracking-wide",
                                children: "Analyze startup websites for AI hype, BS, and GPT wrappers"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `perspective(1000px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg)`,
                            transition: "transform 0.1s ease-out"
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "mt-12 w-full max-w-xl perspective-1000",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c84ed2014013bda5" + " " + "relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-sm text-gray-400 uppercase tracking-wider",
                                    children: "Enter website URL"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: url,
                                    onChange: (e)=>setUrl(e.target.value),
                                    placeholder: "https://example.com",
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter") analyzeSite();
                                    },
                                    className: "jsx-c84ed2014013bda5" + " " + "relative w-full mt-3 p-4 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-600 transition-all duration-300 backdrop-blur-sm"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: analyzeSite,
                                    disabled: loading,
                                    className: "jsx-c84ed2014013bda5" + " " + "relative w-full mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 disabled:hover:scale-100",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c84ed2014013bda5" + " " + "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-c84ed2014013bda5" + " " + "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 19
                                            }, this),
                                            "Analyzing..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 17
                                    }, this) : "Analyze"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c84ed2014013bda5" + " " + "mt-3 text-xs text-gray-500",
                                    children: [
                                        "Uses backend:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-gray-300",
                                            children: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl backdrop-blur-sm animate-pulse max-w-xl w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-c84ed2014013bda5" + " " + "text-red-400",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this),
                    data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "mt-12 w-full max-w-3xl animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: `perspective(1000px) rotateX(${tiltX * 0.3}deg) rotateY(${tiltY * 0.3}deg)`,
                                transition: "transform 0.1s ease-out"
                            },
                            className: "jsx-c84ed2014013bda5" + " " + "relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
                                    children: "📊 Hype Score Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-gray-500 mt-2",
                                    children: "Based on website content analysis"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative space-y-6 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "Buzzword Score",
                                            value: data.buzzwordScore,
                                            color: "purple"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "Fake AI Claims Score",
                                            value: data.fakeAIClaimsScore,
                                            color: "pink"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "GPT Wrapper Probability",
                                            value: data.gptWrapperProbability,
                                            color: "indigo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "KPI Vagueness Score",
                                            value: data.kpiVaguenessScore,
                                            color: "blue"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative mt-8 p-6 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-sm text-gray-500 uppercase tracking-wider",
                                            children: "Should You Interview?"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c84ed2014013bda5" + " " + `text-3xl font-bold mt-2 ${data.shouldYouInterview === "Yes" ? "text-green-400" : data.shouldYouInterview === "Maybe" ? "text-yellow-400" : "text-red-400"}`,
                                            children: data.shouldYouInterview
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative mt-8 p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-2xl font-bold mb-3 text-red-400",
                                            children: "💀 Roast Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-red-200/80 leading-relaxed",
                                            children: data.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c84ed2014013bda5",
                children: "@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in.jsx-c84ed2014013bda5{animation:.5s ease-out fade-in}.perspective-1000.jsx-c84ed2014013bda5{perspective:1000px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 498,
        columnNumber: 5
    }, this);
}
function ScoreBar({ label, value, color }) {
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setAnimated(value), 100);
        return ()=>clearTimeout(timer);
    }, [
        value
    ]);
    const colorMap = {
        purple: "from-purple-500 to-purple-600",
        pink: "from-pink-500 to-rose-600",
        indigo: "from-indigo-500 to-blue-600",
        blue: "from-blue-500 to-cyan-600"
    };
    const gradient = colorMap[color] || colorMap.purple;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7c39b03c0d4450a1" + " " + "transform hover:scale-105 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7c39b03c0d4450a1" + " " + "flex justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-7c39b03c0d4450a1" + " " + "text-gray-300 font-medium",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-7c39b03c0d4450a1" + " " + "text-gray-500 font-mono",
                        children: [
                            value,
                            "/100"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7c39b03c0d4450a1" + " " + "relative w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/10 shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${animated}%`
                        },
                        className: "jsx-7c39b03c0d4450a1" + " " + `absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7c39b03c0d4450a1" + " " + "absolute inset-0 bg-white/20 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 737,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 733,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "shine 2s infinite",
                            animationDelay: `${value / 100}s`
                        },
                        className: "jsx-7c39b03c0d4450a1" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7c39b03c0d4450a1",
                children: "@keyframes shine{0%{transform:translate(-100%)}to{transform:translate(200%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 726,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = ("TURBOPACK compile-time value", "undefined") !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || ("TURBOPACK compile-time value", "undefined") === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if ("TURBOPACK compile-time truthy", 1) {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f324b2f3._.js.map