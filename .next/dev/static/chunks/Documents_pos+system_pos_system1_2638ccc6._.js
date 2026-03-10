(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useUserStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-client] (ecmascript) <export default as BuildingStorefrontIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/KeyIcon.js [app-client] (ecmascript) <export default as KeyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ExclamationCircleIcon.js [app-client] (ecmascript) <export default as ExclamationCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightOnRectangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightOnRectangleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowRightOnRectangleIcon.js [app-client] (ecmascript) <export default as ArrowRightOnRectangleIcon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Default tenant for testing - in real app, this would be dynamic
const DEFAULT_TENANT = 'default-tenant';
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(129);
    if ($[0] !== "51fd14f56fda19d6b69b7ef5fa61faa4222871193e4bebdae1420c6e82dc757f") {
        for(let $i = 0; $i < 129; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51fd14f56fda19d6b69b7ef5fa61faa4222871193e4bebdae1420c6e82dc757f";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { findUserByCredentials, getUsersByTenant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [shakeError, setShakeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let T0;
    let T1;
    let t0;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t2;
    let t20;
    let t21;
    let t22;
    let t23;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== error || $[2] !== findUserByCredentials || $[3] !== getUsersByTenant || $[4] !== isLoading || $[5] !== password || $[6] !== router || $[7] !== setUser || $[8] !== shakeError || $[9] !== username) {
        const availableUsers = getUsersByTenant(DEFAULT_TENANT);
        let t24;
        if ($[36] !== findUserByCredentials || $[37] !== password || $[38] !== router || $[39] !== setUser || $[40] !== username) {
            t24 = ({
                "LoginPage[handleLogin]": async (e)=>{
                    e.preventDefault();
                    setError("");
                    setShakeError(false);
                    if (!username || !password) {
                        setError("Please enter both username and password");
                        setShakeError(true);
                        setTimeout({
                            "LoginPage[handleLogin > setTimeout()]": ()=>setShakeError(false)
                        }["LoginPage[handleLogin > setTimeout()]"], 500);
                        return;
                    }
                    setIsLoading(true);
                    setTimeout({
                        "LoginPage[handleLogin > setTimeout()]": ()=>{
                            const user = findUserByCredentials(username, password, DEFAULT_TENANT);
                            if (user) {
                                setUser(user);
                                router.push("/");
                            } else {
                                setError("Invalid credentials. Please check your username and password.");
                                setShakeError(true);
                                setTimeout({
                                    "LoginPage[handleLogin > setTimeout() > setTimeout()]": ()=>setShakeError(false)
                                }["LoginPage[handleLogin > setTimeout() > setTimeout()]"], 500);
                            }
                            setIsLoading(false);
                        }
                    }["LoginPage[handleLogin > setTimeout()]"], 1000);
                }
            })["LoginPage[handleLogin]"];
            $[36] = findUserByCredentials;
            $[37] = password;
            $[38] = router;
            $[39] = setUser;
            $[40] = username;
            $[41] = t24;
        } else {
            t24 = $[41];
        }
        const handleLogin = t24;
        t17 = "min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden";
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900/40 to-purple-900/30"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this);
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this);
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.15),transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this);
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this);
            $[42] = t18;
            $[43] = t19;
            $[44] = t20;
            $[45] = t21;
            $[46] = t22;
        } else {
            t18 = $[42];
            t19 = $[43];
            t20 = $[44];
            t21 = $[45];
            t22 = $[46];
        }
        let t25;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this);
            $[47] = t25;
        } else {
            t25 = $[47];
        }
        let t26;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "2s"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this);
            $[48] = t26;
        } else {
            t26 = $[48];
        }
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    t25,
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse",
                        style: {
                            animationDelay: "4s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 142,
                        columnNumber: 73
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this);
            $[49] = t23;
        } else {
            t23 = $[49];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = {
                opacity: 0,
                y: 20
            };
            t13 = {
                opacity: 1,
                y: 0
            };
            t14 = {
                duration: 0.6
            };
            $[50] = t12;
            $[51] = t13;
            $[52] = t14;
        } else {
            t12 = $[50];
            t13 = $[51];
            t14 = $[52];
        }
        t15 = "relative z-10 w-full max-w-md";
        let t27;
        let t28;
        let t29;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = {
                scale: 0.8
            };
            t28 = {
                scale: 1
            };
            t29 = {
                delay: 0.2,
                duration: 0.4
            };
            $[53] = t27;
            $[54] = t28;
            $[55] = t29;
        } else {
            t27 = $[53];
            t28 = $[54];
            t29 = $[55];
        }
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t27,
                        animate: t28,
                        transition: t29,
                        className: "inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-6 ring-1 ring-blue-400/30 shadow-2xl shadow-blue-500/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__["BuildingStorefrontIcon"], {
                            className: "w-10 h-10 text-blue-300"
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                            lineNumber: 194,
                            columnNumber: 304
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 194,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-3",
                        children: "Enterprise POS"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 194,
                        columnNumber: 379
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-lg",
                        children: "Branch Access Management System"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 194,
                        columnNumber: 511
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[56] = t16;
        } else {
            t16 = $[56];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = {
                opacity: 0,
                scale: 0.95
            };
            $[57] = t5;
        } else {
            t5 = $[57];
        }
        if ($[58] !== shakeError) {
            t6 = shakeError ? {
                opacity: 1,
                scale: 1,
                x: [
                    -10,
                    10,
                    -10,
                    10,
                    0
                ]
            } : {
                opacity: 1,
                scale: 1
            };
            $[58] = shakeError;
            $[59] = t6;
        } else {
            t6 = $[59];
        }
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = {
                delay: 0.3,
                duration: 0.4
            };
            $[60] = t7;
        } else {
            t7 = $[60];
        }
        t8 = `bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-white/10 shadow-2xl ${shakeError ? "animate-shake" : ""}`;
        if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3",
                        children: "Branch Access"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 234,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm",
                        children: "Enter your credentials to access your terminal"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 234,
                        columnNumber: 172
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 234,
                columnNumber: 12
            }, this);
            $[61] = t9;
        } else {
            t9 = $[61];
        }
        let t30;
        if ($[62] !== error) {
            t30 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: -20,
                    scale: 0.95
                },
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                },
                className: "absolute -top-16 left-0 right-0 mx-auto w-full max-w-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-red-500/90 backdrop-blur-xl border border-red-400/50 rounded-xl shadow-2xl flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleIcon$3e$__["ExclamationCircleIcon"], {
                            className: "w-5 h-5 text-white shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                            lineNumber: 257,
                            columnNumber: 201
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-sm font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                            lineNumber: 257,
                            columnNumber: 266
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LoginPage[<button>.onClick]": ()=>setError("")
                            }["LoginPage[<button>.onClick]"],
                            className: "ml-auto text-white/70 hover:text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 193
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                                lineNumber: 259,
                                columnNumber: 114
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                            lineNumber: 257,
                            columnNumber: 329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                    lineNumber: 257,
                    columnNumber: 78
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 241,
                columnNumber: 22
            }, this);
            $[62] = error;
            $[63] = t30;
        } else {
            t30 = $[63];
        }
        if ($[64] !== t30) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: t30
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[64] = t30;
            $[65] = t10;
        } else {
            t10 = $[65];
        }
        let t31;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white/80 text-sm font-medium mb-2",
                children: "Username"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this);
            $[66] = t31;
        } else {
            t31 = $[66];
        }
        let t32;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400/60"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this);
            $[67] = t32;
        } else {
            t32 = $[67];
        }
        let t33;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = ({
                "LoginPage[<input>.onChange]": (e_0)=>setUsername(e_0.target.value)
            })["LoginPage[<input>.onChange]"];
            $[68] = t33;
        } else {
            t33 = $[68];
        }
        let t34;
        if ($[69] !== isLoading || $[70] !== username) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t32,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: username,
                                onChange: t33,
                                className: "w-full pl-10 pr-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-inner",
                                placeholder: "Enter your username",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                                lineNumber: 297,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 297,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 297,
                columnNumber: 13
            }, this);
            $[69] = isLoading;
            $[70] = username;
            $[71] = t34;
        } else {
            t34 = $[71];
        }
        let t35;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-white/80 text-sm font-medium mb-2",
                children: "Password"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, this);
            $[72] = t35;
        } else {
            t35 = $[72];
        }
        let t36;
        if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__["KeyIcon"], {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400/60"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[73] = t36;
        } else {
            t36 = $[73];
        }
        let t37;
        if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = ({
                "LoginPage[<input>.onChange]": (e_1)=>setPassword(e_1.target.value)
            })["LoginPage[<input>.onChange]"];
            $[74] = t37;
        } else {
            t37 = $[74];
        }
        let t38;
        if ($[75] !== isLoading || $[76] !== password) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t36,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: t37,
                                className: "w-full pl-10 pr-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-inner",
                                placeholder: "Enter your password",
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                                lineNumber: 329,
                                columnNumber: 54
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 329,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 329,
                columnNumber: 13
            }, this);
            $[75] = isLoading;
            $[76] = password;
            $[77] = t38;
        } else {
            t38 = $[77];
        }
        let t39;
        let t40;
        if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = {
                scale: 1.02
            };
            t40 = {
                scale: 0.98
            };
            $[78] = t39;
            $[79] = t40;
        } else {
            t39 = $[78];
            t40 = $[79];
        }
        let t41;
        if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this);
            $[80] = t41;
        } else {
            t41 = $[80];
        }
        let t42;
        if ($[81] !== isLoading) {
            t42 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 360,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Authenticating..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 360,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightOnRectangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightOnRectangleIcon$3e$__["ArrowRightOnRectangleIcon"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 360,
                        columnNumber: 158
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Access Terminal"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                        lineNumber: 360,
                        columnNumber: 207
                    }, this)
                ]
            }, void 0, true);
            $[81] = isLoading;
            $[82] = t42;
        } else {
            t42 = $[82];
        }
        let t43;
        if ($[83] !== isLoading || $[84] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                type: "submit",
                whileHover: t39,
                whileTap: t40,
                disabled: isLoading,
                className: "w-full p-4 bg-linear-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-500 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 backdrop-blur-sm border border-blue-400/30 shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden",
                children: [
                    t41,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 368,
                columnNumber: 13
            }, this);
            $[83] = isLoading;
            $[84] = t42;
            $[85] = t43;
        } else {
            t43 = $[85];
        }
        if ($[86] !== handleLogin || $[87] !== t34 || $[88] !== t38 || $[89] !== t43) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleLogin,
                className: "space-y-4",
                children: [
                    t34,
                    t38,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 376,
                columnNumber: 13
            }, this);
            $[86] = handleLogin;
            $[87] = t34;
            $[88] = t38;
            $[89] = t43;
            $[90] = t11;
        } else {
            t11 = $[90];
        }
        t4 = "mt-8 pt-6 border-t border-slate-700/50";
        t2 = "text-center";
        if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 text-xs mb-3 font-medium",
                children: "Branch Access Credentials"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 388,
                columnNumber: 12
            }, this);
            $[91] = t3;
        } else {
            t3 = $[91];
        }
        t0 = "grid grid-cols-2 gap-3 text-xs";
        t1 = availableUsers.map(_LoginPageAvailableUsersMap);
        $[1] = error;
        $[2] = findUserByCredentials;
        $[3] = getUsersByTenant;
        $[4] = isLoading;
        $[5] = password;
        $[6] = router;
        $[7] = setUser;
        $[8] = shakeError;
        $[9] = username;
        $[10] = T0;
        $[11] = T1;
        $[12] = t0;
        $[13] = t1;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
        $[17] = t13;
        $[18] = t14;
        $[19] = t15;
        $[20] = t16;
        $[21] = t17;
        $[22] = t18;
        $[23] = t19;
        $[24] = t2;
        $[25] = t20;
        $[26] = t21;
        $[27] = t22;
        $[28] = t23;
        $[29] = t3;
        $[30] = t4;
        $[31] = t5;
        $[32] = t6;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
    } else {
        T0 = $[10];
        T1 = $[11];
        t0 = $[12];
        t1 = $[13];
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
        t13 = $[17];
        t14 = $[18];
        t15 = $[19];
        t16 = $[20];
        t17 = $[21];
        t18 = $[22];
        t19 = $[23];
        t2 = $[24];
        t20 = $[25];
        t21 = $[26];
        t22 = $[27];
        t23 = $[28];
        t3 = $[29];
        t4 = $[30];
        t5 = $[31];
        t6 = $[32];
        t7 = $[33];
        t8 = $[34];
        t9 = $[35];
    }
    let t24;
    if ($[92] !== t0 || $[93] !== t1) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 460,
            columnNumber: 11
        }, this);
        $[92] = t0;
        $[93] = t1;
        $[94] = t24;
    } else {
        t24 = $[94];
    }
    let t25;
    if ($[95] !== t2 || $[96] !== t24 || $[97] !== t3) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[95] = t2;
        $[96] = t24;
        $[97] = t3;
        $[98] = t25;
    } else {
        t25 = $[98];
    }
    let t26;
    if ($[99] !== t25 || $[100] !== t4) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t25
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[99] = t25;
        $[100] = t4;
        $[101] = t26;
    } else {
        t26 = $[101];
    }
    let t27;
    if ($[102] !== T0 || $[103] !== t10 || $[104] !== t11 || $[105] !== t26 || $[106] !== t5 || $[107] !== t6 || $[108] !== t7 || $[109] !== t8 || $[110] !== t9) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            initial: t5,
            animate: t6,
            transition: t7,
            className: t8,
            children: [
                t9,
                t10,
                t11,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[102] = T0;
        $[103] = t10;
        $[104] = t11;
        $[105] = t26;
        $[106] = t5;
        $[107] = t6;
        $[108] = t7;
        $[109] = t8;
        $[110] = t9;
        $[111] = t27;
    } else {
        t27 = $[111];
    }
    let t28;
    if ($[112] !== T1 || $[113] !== t12 || $[114] !== t13 || $[115] !== t14 || $[116] !== t15 || $[117] !== t16 || $[118] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            initial: t12,
            animate: t13,
            transition: t14,
            className: t15,
            children: [
                t16,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[112] = T1;
        $[113] = t12;
        $[114] = t13;
        $[115] = t14;
        $[116] = t15;
        $[117] = t16;
        $[118] = t27;
        $[119] = t28;
    } else {
        t28 = $[119];
    }
    let t29;
    if ($[120] !== t17 || $[121] !== t18 || $[122] !== t19 || $[123] !== t20 || $[124] !== t21 || $[125] !== t22 || $[126] !== t23 || $[127] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: [
                t18,
                t19,
                t20,
                t21,
                t22,
                t23,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
            lineNumber: 518,
            columnNumber: 11
        }, this);
        $[120] = t17;
        $[121] = t18;
        $[122] = t19;
        $[123] = t20;
        $[124] = t21;
        $[125] = t22;
        $[126] = t23;
        $[127] = t28;
        $[128] = t29;
    } else {
        t29 = $[128];
    }
    return t29;
}
_s(LoginPage, "HPTa3LTlC/Qy6454wH3cSua+fdk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useUserStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = LoginPage;
function _LoginPageAvailableUsersMap(user_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 bg-slate-800/50 rounded-lg border border-slate-600/30 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-400 mb-1",
                children: [
                    user_0.role === "admin" ? "Manager" : "Cashier",
                    " Terminal"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 534,
                columnNumber: 118
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-blue-300 font-mono text-xs",
                children: [
                    user_0.username,
                    "/",
                    user_0.password
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
                lineNumber: 534,
                columnNumber: 219
            }, this)
        ]
    }, user_0.id, true, {
        fileName: "[project]/Documents/pos+system/pos_system1/src/app/auth/login/page.tsx",
        lineNumber: 534,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function BuildingStorefrontIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](BuildingStorefrontIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-client] (ecmascript) <export default as BuildingStorefrontIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuildingStorefrontIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-client] (ecmascript)");
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function UserIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](UserIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_pos%2Bsystem_pos_system1_2638ccc6._.js.map