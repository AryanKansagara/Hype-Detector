module.exports = [
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
function Home() {
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            // Simulated response for demo
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            setData({
                buzzwordScore: 85,
                fakeAIClaimsScore: 72,
                gptWrapperProbability: 91,
                kpiVaguenessScore: 68,
                shouldYouInterview: "Maybe",
                explanation: "This startup's website is dripping with buzzwords like 'revolutionary AI' and 'paradigm-shifting ML algorithms' while offering suspiciously little technical detail. Their demo looks remarkably similar to ChatGPT with a different color scheme. The KPIs mentioned are vague ('10x improvement') without backing data. Proceed with caution and ask pointed technical questions."
            });
        } catch (err) {
            setError(err.message || "Something went wrong");
        }
        setLoading(false);
    }
    const tiltX = (mousePos.y - window.innerHeight / 2) / 50;
    const tiltY = (mousePos.x - window.innerWidth / 2) / 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-c84ed2014013bda5" + " " + "relative min-h-screen bg-black text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c84ed2014013bda5" + " " + "fixed inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translate(${mousePos.x / 20}px, ${mousePos.y / 20}px)`
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `translate(${-mousePos.x / 20}px, ${-mousePos.y / 20}px)`,
                            animationDelay: "1s"
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c84ed2014013bda5" + " " + "relative z-10 flex flex-col items-center p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "mt-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-c84ed2014013bda5" + " " + "text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent animate-pulse",
                                children: "🚨 Hype Detector"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c84ed2014013bda5" + " " + "text-gray-400 mt-4 text-lg tracking-wide",
                                children: "Analyze startup websites for AI hype, BS, and GPT wrappers"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: `perspective(1000px) rotateX(${tiltX * 0.5}deg) rotateY(${tiltY * 0.5}deg)`,
                            transition: "transform 0.1s ease-out"
                        },
                        className: "jsx-c84ed2014013bda5" + " " + "mt-12 w-full max-w-xl perspective-1000",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c84ed2014013bda5" + " " + "relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-sm text-gray-400 uppercase tracking-wider",
                                    children: "Enter website URL"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: url,
                                    onChange: (e)=>setUrl(e.target.value),
                                    placeholder: "https://example.com",
                                    className: "jsx-c84ed2014013bda5" + " " + "relative w-full mt-3 p-4 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-600 transition-all duration-300 backdrop-blur-sm"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: analyzeSite,
                                    disabled: loading,
                                    className: "jsx-c84ed2014013bda5" + " " + "relative w-full mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 disabled:hover:scale-100",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c84ed2014013bda5" + " " + "flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-c84ed2014013bda5" + " " + "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this),
                                            "Analyzing..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this) : "Analyze"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl backdrop-blur-sm animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-c84ed2014013bda5" + " " + "text-red-400",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c84ed2014013bda5" + " " + "mt-12 w-full max-w-3xl animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                transform: `perspective(1000px) rotateX(${tiltX * 0.3}deg) rotateY(${tiltY * 0.3}deg)`,
                                transition: "transform 0.1s ease-out"
                            },
                            className: "jsx-c84ed2014013bda5" + " " + "relative bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
                                    children: "📊 Hype Score Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative text-gray-500 mt-2",
                                    children: "Based on website content analysis"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative space-y-6 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "Buzzword Score",
                                            value: data.buzzwordScore,
                                            color: "purple"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "Fake AI Claims Score",
                                            value: data.fakeAIClaimsScore,
                                            color: "pink"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "GPT Wrapper Probability",
                                            value: data.gptWrapperProbability,
                                            color: "indigo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                            label: "KPI Vagueness Score",
                                            value: data.kpiVaguenessScore,
                                            color: "blue"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative mt-8 p-6 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-sm text-gray-500 uppercase tracking-wider",
                                            children: "Should You Interview?"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c84ed2014013bda5" + " " + `text-3xl font-bold mt-2 ${data.shouldYouInterview === "Yes" ? "text-green-400" : data.shouldYouInterview === "Maybe" ? "text-yellow-400" : "text-red-400"}`,
                                            children: data.shouldYouInterview
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c84ed2014013bda5" + " " + "relative mt-8 p-6 rounded-xl bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-2xl font-bold mb-3 text-red-400",
                                            children: "💀 Roast Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-c84ed2014013bda5" + " " + "text-red-200/80 leading-relaxed",
                                            children: data.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(void 0, {
                id: "c84ed2014013bda5",
                children: "@keyframes fade-in{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in.jsx-c84ed2014013bda5{animation:.5s ease-out fade-in}.perspective-1000.jsx-c84ed2014013bda5{perspective:1000px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
function ScoreBar({ label, value, color }) {
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7c39b03c0d4450a1" + " " + "transform hover:scale-105 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7c39b03c0d4450a1" + " " + "flex justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-7c39b03c0d4450a1" + " " + "text-gray-300 font-medium",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-7c39b03c0d4450a1" + " " + "text-gray-500 font-mono",
                        children: [
                            value,
                            "/100"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7c39b03c0d4450a1" + " " + "relative w-full h-4 bg-black/50 rounded-full overflow-hidden border border-white/10 shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${animated}%`
                        },
                        className: "jsx-7c39b03c0d4450a1" + " " + `absolute inset-y-0 left-0 bg-gradient-to-r ${colorMap[color]} transition-all duration-1000 ease-out shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7c39b03c0d4450a1" + " " + "absolute inset-0 bg-white/20 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "shine 2s infinite",
                            animationDelay: `${Math.random()}s`
                        },
                        className: "jsx-7c39b03c0d4450a1" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projects$2f$Hype__Detector$2f$hype$2d$detector$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(void 0, {
                id: "7c39b03c0d4450a1",
                children: "@keyframes shine{0%{transform:translate(-100%)}to{transform:translate(200%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx",
        lineNumber: 363,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Projects/Hype Detector/hype-detector/frontend/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e788d695._.js.map