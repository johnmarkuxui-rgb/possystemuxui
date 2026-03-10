(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/pos+system/pos_system1/src/store/useSalesStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesStore",
    ()=>useSalesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
'use client';
;
;
const useSalesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        transactions: [
            {
                id: 'TXN-001',
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                cashierId: 'cashier-001',
                cashierName: 'John Smith',
                items: [
                    {
                        id: '1',
                        name: 'Coca Cola',
                        quantity: 2,
                        price: 1.50,
                        costPrice: 0.80,
                        total: 3.00,
                        profit: 1.40
                    },
                    {
                        id: '2',
                        name: 'Sandwich',
                        quantity: 1,
                        price: 5.99,
                        costPrice: 3.20,
                        total: 5.99,
                        profit: 2.79
                    }
                ],
                totalAmount: 8.99,
                totalProfit: 4.19,
                itemCount: 3,
                status: 'completed',
                tenantId: 'branch-a',
                paymentMethod: 'cash'
            },
            {
                id: 'TXN-002',
                timestamp: new Date(Date.now() - 7200000).toISOString(),
                cashierId: 'cashier-002',
                cashierName: 'Sarah Johnson',
                items: [
                    {
                        id: '3',
                        name: 'Coffee',
                        quantity: 1,
                        price: 3.50,
                        costPrice: 1.20,
                        total: 3.50,
                        profit: 2.30
                    },
                    {
                        id: '4',
                        name: 'Muffin',
                        quantity: 2,
                        price: 2.99,
                        costPrice: 1.50,
                        total: 5.98,
                        profit: 2.98
                    }
                ],
                totalAmount: 9.48,
                totalProfit: 5.28,
                itemCount: 3,
                status: 'completed',
                tenantId: 'branch-a',
                paymentMethod: 'card'
            },
            {
                id: 'TXN-003',
                timestamp: new Date(Date.now() - 10800000).toISOString(),
                cashierId: 'cashier-001',
                cashierName: 'John Smith',
                items: [
                    {
                        id: '5',
                        name: 'Water Bottle',
                        quantity: 1,
                        price: 1.99,
                        costPrice: 0.90,
                        total: 1.99,
                        profit: 1.09
                    }
                ],
                totalAmount: 1.99,
                totalProfit: 1.09,
                itemCount: 1,
                status: 'completed',
                tenantId: 'branch-a',
                paymentMethod: 'cash'
            }
        ],
        addTransaction: (transactionData)=>{
            const newTransaction = {
                ...transactionData,
                id: `TXN-${Date.now()}`,
                timestamp: new Date().toISOString(),
                totalAmount: transactionData.items.reduce((sum, item)=>sum + item.total, 0),
                totalProfit: transactionData.items.reduce((sum, item)=>sum + item.profit, 0),
                itemCount: transactionData.items.reduce((sum, item)=>sum + item.quantity, 0)
            };
            set((state)=>({
                    transactions: [
                        newTransaction,
                        ...state.transactions
                    ]
                }));
        },
        cancelTransaction: (transactionId)=>{
            set((state)=>({
                    transactions: state.transactions.map((transaction)=>transaction.id === transactionId ? {
                            ...transaction,
                            status: 'cancelled'
                        } : transaction)
                }));
        },
        getTransactionsByTenant: (tenantId)=>{
            return get().transactions.filter((transaction)=>transaction.tenantId === tenantId);
        },
        getTransactionsByCashier: (cashierId, tenantId)=>{
            return get().transactions.filter((transaction)=>transaction.cashierId === cashierId && transaction.tenantId === tenantId);
        },
        getTransactionById: (transactionId)=>{
            return get().transactions.find((transaction)=>transaction.id === transactionId);
        },
        getSalesMetrics: (userId, role, tenantId)=>{
            const state = get();
            let filteredTransactions;
            // Apply RBAC filtering
            if (role === 'admin') {
                // Admin sees all transactions for their tenant
                filteredTransactions = state.getTransactionsByTenant(tenantId);
            } else {
                // Staff sees only their own transactions
                filteredTransactions = state.getTransactionsByCashier(userId, tenantId);
            }
            const completedTransactions = filteredTransactions.filter((t)=>t.status === 'completed');
            const cancelledTransactions = filteredTransactions.filter((t)=>t.status === 'cancelled');
            return {
                totalTransactions: filteredTransactions.length,
                grossSales: completedTransactions.reduce((sum, t)=>sum + t.totalAmount, 0),
                netProfit: completedTransactions.reduce((sum, t)=>sum + t.totalProfit, 0),
                averageOrderValue: completedTransactions.length > 0 ? completedTransactions.reduce((sum, t)=>sum + t.totalAmount, 0) / completedTransactions.length : 0,
                totalItems: completedTransactions.reduce((sum, t)=>sum + t.itemCount, 0),
                completedTransactions: completedTransactions.length,
                cancelledTransactions: cancelledTransactions.length
            };
        }
    }), {
    name: 'sales-storage',
    partialize: (state)=>({
            transactions: state.transactions
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SalesReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useSalesStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BanknotesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BanknotesIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BanknotesIcon.js [app-client] (ecmascript) <export default as BanknotesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js [app-client] (ecmascript) <export default as ArrowTrendingUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript) <export default as CalculatorIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function SalesReportPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "aaf04eac8d9d6ec30d0100ef448b25d477a79e24aa424ff6355cac7f172d88fc") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aaf04eac8d9d6ec30d0100ef448b25d477a79e24aa424ff6355cac7f172d88fc";
    }
    const { getSalesMetrics } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"])();
    const { user, getCurrentTenant, isAdmin, isStaff } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [activePeriod, setActivePeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Today");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] !== getCurrentTenant) {
        t0 = getCurrentTenant();
        $[1] = getCurrentTenant;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const currentTenant = t0;
    let t1;
    bb0: {
        if (!user) {
            t1 = null;
            break bb0;
        }
        let t2;
        if ($[3] !== getSalesMetrics || $[4] !== user.id || $[5] !== user.role || $[6] !== user.tenantId) {
            t2 = getSalesMetrics(user.id, user.role, user.tenantId);
            $[3] = getSalesMetrics;
            $[4] = user.id;
            $[5] = user.role;
            $[6] = user.tenantId;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = t2;
    }
    const metrics = t1;
    let t2;
    bb1: {
        if (!isAdmin() || !metrics) {
            t2 = 0;
            break bb1;
        }
        t2 = metrics.grossSales > 0 ? metrics.netProfit / metrics.grossSales * 100 : 0;
    }
    const profitMargin = t2;
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "Today",
            "Week",
            "Month",
            "Year"
        ];
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const periods = t3;
    const formatCurrency = _SalesReportPageFormatCurrency;
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "SalesReportPage[useEffect()]": ()=>{
                setTimeout({
                    "SalesReportPage[useEffect() > setTimeout()]": ()=>{
                        setIsLoading(false);
                    }
                }["SalesReportPage[useEffect() > setTimeout()]"], 1000);
            }
        })["SalesReportPage[useEffect()]"];
        t5 = [];
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    if (isLoading) {
        let t6;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-gray-200 rounded w-1/4 mb-6"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 98,
                columnNumber: 12
            }, this);
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        let t7;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                1,
                                2,
                                3,
                                4
                            ].map(_SalesReportPageAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 105,
                            columnNumber: 78
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 105,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 105,
                columnNumber: 12
            }, this);
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        return t7;
    }
    const t6 = isStaff() ? "My Sales Report" : "Sales Report";
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: t6
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = metrics?.totalTransactions || 0;
    let t9;
    if ($[15] !== currentTenant || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500",
            children: [
                t8,
                " transactions • ",
                currentTenant
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        $[15] = currentTenant;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t7 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[18] = t7;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== activePeriod) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: periods.map({
                "SalesReportPage[periods.map()]": (period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SalesReportPage[periods.map() > <button>.onClick]": ()=>setActivePeriod(period)
                        }["SalesReportPage[periods.map() > <button>.onClick]"],
                        className: `px-4 py-2 rounded-lg font-medium transition-all ${activePeriod === period ? "bg-blue-600 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"}`,
                        children: period
                    }, period, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                        lineNumber: 143,
                        columnNumber: 53
                    }, this)
            }["SalesReportPage[periods.map()]"])
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[21] = activePeriod;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: 20
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        $[23] = t12;
        $[24] = t13;
    } else {
        t12 = $[23];
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-blue-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BanknotesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BanknotesIcon$3e$__["BanknotesIcon"], {
                className: "size-6 text-blue-600"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 171,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    const t15 = isStaff() ? "My Sales" : "Gross Sales";
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600",
            children: t15
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    const t17 = metrics?.grossSales || 0;
    let t18;
    if ($[28] !== t17) {
        t18 = formatCurrency(t17);
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold text-gray-900",
            children: t18
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t16 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 204,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[32] = t16;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"], {
            className: "size-5 text-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t12,
            animate: t13,
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    t20,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 220,
                columnNumber: 154
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[36] = t20;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    let t24;
    let t25;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 20
        };
        t24 = {
            opacity: 1,
            y: 0
        };
        t25 = {
            delay: 0.1
        };
        $[38] = t23;
        $[39] = t24;
        $[40] = t25;
    } else {
        t23 = $[38];
        t24 = $[39];
        t25 = $[40];
    }
    let t26;
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-purple-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"], {
                className: "size-6 text-purple-600"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 252,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600",
            children: "Total Orders"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[41] = t26;
        $[42] = t27;
    } else {
        t26 = $[41];
        t27 = $[42];
    }
    const t28 = metrics?.totalTransactions || 0;
    let t29;
    if ($[43] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t27,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-gray-900",
                            children: t28
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 263,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 263,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[43] = t28;
        $[44] = t29;
    } else {
        t29 = $[44];
    }
    let t30;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"], {
            className: "size-5 text-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[45] = t30;
    } else {
        t30 = $[45];
    }
    let t31;
    if ($[46] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t23,
            animate: t24,
            transition: t25,
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    t29,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 278,
                columnNumber: 171
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[46] = t29;
        $[47] = t31;
    } else {
        t31 = $[47];
    }
    let t32;
    let t33;
    let t34;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            opacity: 0,
            y: 20
        };
        t33 = {
            opacity: 1,
            y: 0
        };
        t34 = {
            delay: 0.2
        };
        $[48] = t32;
        $[49] = t33;
        $[50] = t34;
    } else {
        t32 = $[48];
        t33 = $[49];
        t34 = $[50];
    }
    let t35;
    let t36;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-green-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                className: "size-6 text-green-600"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 310,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600",
            children: "Items Sold"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[51] = t35;
        $[52] = t36;
    } else {
        t35 = $[51];
        t36 = $[52];
    }
    const t37 = metrics?.totalItems || 0;
    let t38;
    if ($[53] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t36,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-gray-900",
                            children: t37
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 321,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 321,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[53] = t37;
        $[54] = t38;
    } else {
        t38 = $[54];
    }
    let t39;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"], {
            className: "size-5 text-green-500"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[55] = t39;
    } else {
        t39 = $[55];
    }
    let t40;
    if ($[56] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t32,
            animate: t33,
            transition: t34,
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    t38,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 336,
                columnNumber: 171
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[56] = t38;
        $[57] = t40;
    } else {
        t40 = $[57];
    }
    let t41;
    if ($[58] !== isAdmin || $[59] !== metrics?.netProfit) {
        t41 = isAdmin() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 0.3
            },
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-green-100 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                    className: "size-6 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 253
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                lineNumber: 352,
                                columnNumber: 208
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Net Profit"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 314
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: formatCurrency(metrics?.netProfit || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 369
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                lineNumber: 352,
                                columnNumber: 309
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                        lineNumber: 352,
                        columnNumber: 167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"], {
                        className: "size-5 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                        lineNumber: 352,
                        columnNumber: 478
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 352,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 344,
            columnNumber: 24
        }, this);
        $[58] = isAdmin;
        $[59] = metrics?.netProfit;
        $[60] = t41;
    } else {
        t41 = $[60];
    }
    let t42;
    if ($[61] !== isStaff || $[62] !== metrics?.averageOrderValue) {
        t42 = isStaff() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 0.3
            },
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-purple-100 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
                                    className: "size-6 text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 254
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                lineNumber: 369,
                                columnNumber: 208
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Avg Order Value"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 318
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-gray-900",
                                        children: formatCurrency(metrics?.averageOrderValue || 0)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 378
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                lineNumber: 369,
                                columnNumber: 313
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                        lineNumber: 369,
                        columnNumber: 167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"], {
                        className: "size-5 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                        lineNumber: 369,
                        columnNumber: 495
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 369,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 361,
            columnNumber: 24
        }, this);
        $[61] = isStaff;
        $[62] = metrics?.averageOrderValue;
        $[63] = t42;
    } else {
        t42 = $[63];
    }
    let t43;
    if ($[64] !== t22 || $[65] !== t31 || $[66] !== t40 || $[67] !== t41 || $[68] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
            children: [
                t22,
                t31,
                t40,
                t41,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[64] = t22;
        $[65] = t31;
        $[66] = t40;
        $[67] = t41;
        $[68] = t42;
        $[69] = t43;
    } else {
        t43 = $[69];
    }
    let t44;
    if ($[70] !== isAdmin || $[71] !== metrics || $[72] !== profitMargin) {
        t44 = isAdmin() && metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 0.4
            },
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-gray-900 mb-6",
                    children: "Profit Analysis"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 398,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-blue-600",
                                    children: formatCurrency(metrics.grossSales)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 226
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: "Total Sales Revenue"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 318
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 398,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-red-600",
                                    children: formatCurrency(metrics.grossSales - metrics.netProfit)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 422
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: "Cost of Goods Sold"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 533
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 398,
                            columnNumber: 393
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-green-600",
                                    children: formatCurrency(metrics.netProfit)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 636
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: "Net Profit"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 728
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 398,
                            columnNumber: 607
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 398,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm text-gray-600 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Profit Margin"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 887
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        profitMargin.toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 913
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 398,
                            columnNumber: 822
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-gray-200 rounded-full h-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-linear-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500",
                                style: {
                                    width: `${Math.min(profitMargin, 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                                lineNumber: 398,
                                columnNumber: 1011
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                            lineNumber: 398,
                            columnNumber: 958
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 398,
                    columnNumber: 800
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 390,
            columnNumber: 35
        }, this);
        $[70] = isAdmin;
        $[71] = metrics;
        $[72] = profitMargin;
        $[73] = t44;
    } else {
        t44 = $[73];
    }
    let t45;
    let t46;
    let t47;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            opacity: 0,
            y: 20
        };
        t46 = {
            opacity: 1,
            y: 0
        };
        t47 = {
            delay: 0.5
        };
        $[74] = t45;
        $[75] = t46;
        $[76] = t47;
    } else {
        t45 = $[74];
        t46 = $[75];
        t47 = $[76];
    }
    let t48;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-900 mb-6",
            children: "Performance Summary"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[77] = t48;
    } else {
        t48 = $[77];
    }
    const t49 = metrics?.completedTransactions || 0;
    let t50;
    if ($[78] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold text-blue-600",
            children: t49
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[78] = t49;
        $[79] = t50;
    } else {
        t50 = $[79];
    }
    const t51 = isStaff() ? "Your Completed Sales" : "Completed Transactions";
    let t52;
    if ($[80] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600 mt-1",
            children: t51
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        $[80] = t51;
        $[81] = t52;
    } else {
        t52 = $[81];
    }
    let t53;
    if ($[82] !== t50 || $[83] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-4 bg-gray-50 rounded-lg",
            children: [
                t50,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[82] = t50;
        $[83] = t52;
        $[84] = t53;
    } else {
        t53 = $[84];
    }
    const t54 = metrics?.cancelledTransactions || 0;
    let t55;
    if ($[85] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold text-green-600",
            children: t54
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[85] = t54;
        $[86] = t55;
    } else {
        t55 = $[86];
    }
    const t56 = isStaff() ? "Your Cancelled Sales" : "Cancelled Transactions";
    let t57;
    if ($[87] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-600 mt-1",
            children: t56
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[87] = t56;
        $[88] = t57;
    } else {
        t57 = $[88];
    }
    let t58;
    if ($[89] !== t55 || $[90] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-4 bg-gray-50 rounded-lg",
            children: [
                t55,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 485,
            columnNumber: 11
        }, this);
        $[89] = t55;
        $[90] = t57;
        $[91] = t58;
    } else {
        t58 = $[91];
    }
    let t59;
    if ($[92] !== t53 || $[93] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t45,
            animate: t46,
            transition: t47,
            className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        t53,
                        t58
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                    lineNumber: 494,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[92] = t53;
        $[93] = t58;
        $[94] = t59;
    } else {
        t59 = $[94];
    }
    let t60;
    if ($[95] !== t10 || $[96] !== t11 || $[97] !== t43 || $[98] !== t44 || $[99] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t10,
                t11,
                t43,
                t44,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[95] = t10;
        $[96] = t11;
        $[97] = t43;
        $[98] = t44;
        $[99] = t59;
        $[100] = t60;
    } else {
        t60 = $[100];
    }
    return t60;
}
_s(SalesReportPage, "xdlCOXGQm3Gb9LjTzaUkbtyVOFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = SalesReportPage;
function _SalesReportPageAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl p-6 border border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4 bg-gray-200 rounded w-3/4 mb-4"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 516,
                columnNumber: 82
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-gray-200 rounded w-1/2"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
                lineNumber: 516,
                columnNumber: 136
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/Documents/pos+system/pos_system1/src/app/sales/page.tsx",
        lineNumber: 516,
        columnNumber: 10
    }, this);
}
function _SalesReportPageFormatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
}
var _c;
__turbopack_context__.k.register(_c, "SalesReportPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BanknotesIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function BanknotesIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](BanknotesIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BanknotesIcon.js [app-client] (ecmascript) <export default as BanknotesIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BanknotesIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BanknotesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BanknotesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/BanknotesIcon.js [app-client] (ecmascript)");
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ArrowTrendingUpIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ArrowTrendingUpIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js [app-client] (ecmascript) <export default as ArrowTrendingUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowTrendingUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js [app-client] (ecmascript)");
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function CalculatorIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](CalculatorIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript) <export default as CalculatorIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalculatorIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript)");
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ShoppingBagIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ShoppingBagIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript) <export default as ShoppingBagIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingBagIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript)");
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function DocumentTextIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](DocumentTextIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentTextIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_pos%2Bsystem_pos_system1_b15cc995._.js.map