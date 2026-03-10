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
"[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript) <export default as CalculatorIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EyeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/EyeIcon.js [app-client] (ecmascript) <export default as EyeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowDownTrayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownTrayIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowDownTrayIcon.js [app-client] (ecmascript) <export default as ArrowDownTrayIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PrinterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrinterIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/PrinterIcon.js [app-client] (ecmascript) <export default as PrinterIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HashtagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HashtagIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/HashtagIcon.js [app-client] (ecmascript) <export default as HashtagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CubeIcon.js [app-client] (ecmascript) <export default as CubeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-client] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/XCircleIcon.js [app-client] (ecmascript) <export default as XCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/TrashIcon.js [app-client] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useSalesStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/lib/utils.ts [app-client] (ecmascript)");
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
function CheckoutPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(101);
    if ($[0] !== "44e4a6ca1d80693fae0e727d2c557261e00f042aecb6f2cb25f2ee673a75ea84") {
        for(let $i = 0; $i < 101; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44e4a6ca1d80693fae0e727d2c557261e00f042aecb6f2cb25f2ee673a75ea84";
    }
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { transactions, getSalesMetrics, getTransactionsByTenant, getTransactionsByCashier, cancelTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"])();
    const [selectedTransaction, setSelectedTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    bb0: {
        if (!user) {
            t0 = null;
            break bb0;
        }
        let t1;
        if ($[1] !== getSalesMetrics || $[2] !== user.id || $[3] !== user.role || $[4] !== user.tenantId) {
            t1 = getSalesMetrics(user.id, user.role, user.tenantId);
            $[1] = getSalesMetrics;
            $[2] = user.id;
            $[3] = user.role;
            $[4] = user.tenantId;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const metrics = t0;
    let t1;
    bb1: {
        if (!user) {
            let t2;
            if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
                t2 = [];
                $[6] = t2;
            } else {
                t2 = $[6];
            }
            t1 = t2;
            break bb1;
        }
        if (user.role === "admin") {
            let t2;
            if ($[7] !== getTransactionsByTenant || $[8] !== user.tenantId) {
                t2 = getTransactionsByTenant(user.tenantId);
                $[7] = getTransactionsByTenant;
                $[8] = user.tenantId;
                $[9] = t2;
            } else {
                t2 = $[9];
            }
            t1 = t2;
        } else {
            let t2;
            if ($[10] !== getTransactionsByCashier || $[11] !== user.id || $[12] !== user.tenantId) {
                t2 = getTransactionsByCashier(user.id, user.tenantId);
                $[10] = getTransactionsByCashier;
                $[11] = user.id;
                $[12] = user.tenantId;
                $[13] = t2;
            } else {
                t2 = $[13];
            }
            t1 = t2;
        }
    }
    const filteredTransactions = t1;
    let t2;
    let t3;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CheckoutPage[useEffect()]": ()=>{
                setTimeout({
                    "CheckoutPage[useEffect() > setTimeout()]": ()=>{
                        setLoading(false);
                    }
                }["CheckoutPage[useEffect() > setTimeout()]"], 500);
            }
        })["CheckoutPage[useEffect()]"];
        t3 = [];
        $[14] = t2;
        $[15] = t3;
    } else {
        t2 = $[14];
        t3 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const formatCurrency = _CheckoutPageFormatCurrency;
    const formatTime = _CheckoutPageFormatTime;
    const formatDate = _CheckoutPageFormatDate;
    let t4;
    if ($[16] !== filteredTransactions || $[17] !== user?.tenantId) {
        t4 = ({
            "CheckoutPage[exportToCSV]": ()=>{
                const headers = [
                    "Transaction ID",
                    "Date",
                    "Time",
                    "Cashier",
                    "Items",
                    "Total",
                    "Payment",
                    "Status"
                ];
                const rows = filteredTransactions.map({
                    "CheckoutPage[exportToCSV > filteredTransactions.map()]": (t)=>[
                            t.id,
                            formatDate(t.timestamp),
                            formatTime(t.timestamp),
                            t.cashierName,
                            t.itemCount.toString(),
                            formatCurrency(t.totalAmount),
                            t.paymentMethod,
                            t.status
                        ]
                }["CheckoutPage[exportToCSV > filteredTransactions.map()]"]);
                const csvContent = [
                    headers,
                    ...rows
                ].map(_CheckoutPageExportToCSVAnonymous).join("\n");
                const blob = new Blob([
                    csvContent
                ], {
                    type: "text/csv"
                });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `daily-transactions-${user?.tenantId}-${new Date().toISOString().split("T")[0]}.csv`;
                link.click();
                URL.revokeObjectURL(url);
            }
        })["CheckoutPage[exportToCSV]"];
        $[16] = filteredTransactions;
        $[17] = user?.tenantId;
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    const exportToCSV = t4;
    const printReport = _CheckoutPagePrintReport;
    let t5;
    if ($[19] !== cancelTransaction) {
        t5 = ({
            "CheckoutPage[handleCancelTransaction]": (transactionId)=>{
                if (confirm("Are you sure you want to cancel this transaction?")) {
                    cancelTransaction(transactionId);
                }
            }
        })["CheckoutPage[handleCancelTransaction]"];
        $[19] = cancelTransaction;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    const handleCancelTransaction = t5;
    let t6;
    if ($[21] !== user?.role) {
        t6 = ({
            "CheckoutPage[TransactionDetailModal]": (t7)=>{
                const { transaction, onClose } = t7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.9,
                                opacity: 0
                            },
                            className: "bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden",
                            onClick: _CheckoutPageTransactionDetailModalMotionDivOnClick,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-gray-900",
                                                    children: "Transaction Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 256
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: [
                                                        transaction.id,
                                                        " • ",
                                                        formatDate(transaction.timestamp),
                                                        " at ",
                                                        formatTime(transaction.timestamp)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 332
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 251
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                                className: "w-5 h-5 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 561
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 171
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 overflow-y-auto max-h-[70vh]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Cashier"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 776
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold",
                                                            children: transaction.cashierName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 824
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 733
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Payment Method"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 931
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold capitalize",
                                                            children: transaction.paymentMethod
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 986
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 888
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 1106
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === "completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                                            children: [
                                                                transaction.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 1381
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 1428
                                                                }, this),
                                                                transaction.status
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 1153
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 1063
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-4 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Total Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 1545
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-lg",
                                                            children: formatCurrency(transaction.totalAmount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 1598
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 1502
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 673
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold mb-4",
                                                    children: "Items Sold"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 1714
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: transaction.items.map({
                                                        "CheckoutPage[TransactionDetailModal > transaction.items.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-medium",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 212
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-500",
                                                                                children: [
                                                                                    item.quantity,
                                                                                    " × ",
                                                                                    formatCurrency(item.price),
                                                                                    " = ",
                                                                                    formatCurrency(item.total)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 254
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 188
                                                                    }, this),
                                                                    user?.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-500",
                                                                                children: [
                                                                                    "Cost: ",
                                                                                    formatCurrency(item.costPrice)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 443
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium text-green-600",
                                                                                children: [
                                                                                    "Profit: ",
                                                                                    formatCurrency(item.profit)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 522
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 405
                                                                    }, this)
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 97
                                                            }, this)
                                                    }["CheckoutPage[TransactionDetailModal > transaction.items.map()]"])
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 1772
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 1692
                                        }, this),
                                        user?.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-blue-50 border border-blue-200 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-blue-600",
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 250
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-blue-900 text-lg",
                                                            children: formatCurrency(transaction.totalAmount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 299
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 184
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-50 border border-gray-200 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: "Total Cost"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 463
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-gray-900 text-lg",
                                                            children: formatCurrency(transaction.items.reduce(_CheckoutPageTransactionDetailModalTransactionItemsReduce, 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 514
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 397
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-green-50 border border-green-200 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-green-600",
                                                            children: "Total Profit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 743
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-green-900 text-lg",
                                                            children: formatCurrency(transaction.totalProfit)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 797
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 675
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 129
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 623
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                            lineNumber: 169,
                            columnNumber: 125
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 163,
                        columnNumber: 33
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 163,
                    columnNumber: 16
                }, this);
            }
        })["CheckoutPage[TransactionDetailModal]"];
        $[21] = user?.role;
        $[22] = t6;
    } else {
        t6 = $[22];
    }
    const TransactionDetailModal = t6;
    if (loading) {
        let t7;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "Daily Transactions"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                lineNumber: 192,
                columnNumber: 12
            }, this);
            $[23] = t7;
        } else {
            t7 = $[23];
        }
        let t8;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-6",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-gray-200 rounded w-1/4 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 199,
                                columnNumber: 78
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 bg-gray-200 rounded mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 199,
                                columnNumber: 132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 bg-gray-200 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 199,
                                columnNumber: 181
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 199,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                lineNumber: 199,
                columnNumber: 12
            }, this);
            $[24] = t8;
        } else {
            t8 = $[24];
        }
        return t8;
    }
    let t7;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: "Daily Transactions"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    let t8;
    let t9;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            scale: 1.02
        };
        t9 = {
            scale: 0.98
        };
        $[26] = t8;
        $[27] = t9;
    } else {
        t8 = $[26];
        t9 = $[27];
    }
    let t10;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowDownTrayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownTrayIcon$3e$__["ArrowDownTrayIcon"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] !== exportToCSV) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t8,
            whileTap: t9,
            onClick: exportToCSV,
            className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
                t10,
                "Export CSV"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[29] = exportToCSV;
        $[30] = t11;
    } else {
        t11 = $[30];
    }
    let t12;
    let t13;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            scale: 1.02
        };
        t13 = {
            scale: 0.98
        };
        $[31] = t12;
        $[32] = t13;
    } else {
        t12 = $[31];
        t13 = $[32];
    }
    let t14;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t12,
            whileTap: t13,
            onClick: printReport,
            className: "inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PrinterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrinterIcon$3e$__["PrinterIcon"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 260,
                    columnNumber: 205
                }, this),
                "Print Report"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t11) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        t11,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 267,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[34] = t11;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== metrics || $[37] !== user?.role) {
        t16 = metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Total Transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 155
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: metrics.totalTransactions
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 226
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 281,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-blue-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                    className: "w-6 h-6 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 357
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 281,
                                columnNumber: 311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 281,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 275,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1
                    },
                    className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Gross Sales"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 155
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: formatCurrency(metrics.grossSales)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 219
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 289,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-green-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"], {
                                    className: "w-6 h-6 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 360
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 289,
                                columnNumber: 313
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 289,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 281,
                    columnNumber: 436
                }, this),
                user?.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.2
                    },
                    className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Net Profit"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 155
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-green-600",
                                        children: formatCurrency(metrics.netProfit)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 218
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 297,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-green-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                    className: "w-6 h-6 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 359
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 297,
                                columnNumber: 312
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 297,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 289,
                    columnNumber: 469
                }, this),
                user?.role === "staff" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-600",
                                                children: "My Sales"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 157
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-blue-600",
                                                children: formatCurrency(metrics.grossSales)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 218
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 152
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-blue-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"], {
                                            className: "w-6 h-6 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 358
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 312
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 305,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                            lineNumber: 297,
                            columnNumber: 465
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-600",
                                                children: "Items Sold"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 157
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-purple-600",
                                                children: metrics.totalItems
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 152
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-purple-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__["CubeIcon"], {
                                            className: "w-6 h-6 text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 348
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 300
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 313,
                                columnNumber: 101
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                            lineNumber: 305,
                            columnNumber: 439
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: user?.role === "admin" ? 0.3 : 0.4
                    },
                    className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Avg Order Value"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 155
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: formatCurrency(metrics.averageOrderValue)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 223
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 321,
                                columnNumber: 150
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-purple-100 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
                                    className: "w-6 h-6 text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 372
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 321,
                                columnNumber: 324
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 321,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 313,
                    columnNumber: 425
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 275,
            columnNumber: 22
        }, this);
        $[36] = metrics;
        $[37] = user?.role;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    let t17;
    let t18;
    let t19;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            opacity: 0,
            y: 20
        };
        t18 = {
            opacity: 1,
            y: 0
        };
        t19 = {
            delay: 0.4
        };
        $[39] = t17;
        $[40] = t18;
        $[41] = t19;
    } else {
        t17 = $[39];
        t18 = $[40];
        t19 = $[41];
    }
    const t20 = user?.role === "admin" ? "All Transactions" : "My Transactions";
    let t21;
    if ($[42] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-900",
            children: t20
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    const t22 = user?.tenantId;
    const t23 = user?.role === "staff" && " \u2022 Your transactions only";
    let t24;
    if ($[44] !== filteredTransactions.length || $[45] !== t22 || $[46] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mt-1",
            children: [
                "Showing ",
                filteredTransactions.length,
                " transactions for ",
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[44] = filteredTransactions.length;
        $[45] = t22;
        $[46] = t23;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== t21 || $[49] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[48] = t21;
        $[49] = t24;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    const t26 = metrics?.completedTransactions || 0;
    let t27;
    if ($[51] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",
            children: [
                t26,
                " Completed"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[51] = t26;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    const t28 = metrics?.cancelledTransactions || 0;
    let t29;
    if ($[53] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",
            children: [
                t28,
                " Cancelled"
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[53] = t28;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] !== t27 || $[56] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[55] = t27;
        $[56] = t29;
        $[57] = t30;
    } else {
        t30 = $[57];
    }
    let t31;
    if ($[58] !== t25 || $[59] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-b border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t25,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                lineNumber: 410,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[58] = t25;
        $[59] = t30;
        $[60] = t31;
    } else {
        t31 = $[60];
    }
    let t32;
    let t33;
    let t34;
    let t35;
    let t36;
    let t37;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Date & Time"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Trans ID"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Cashier"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Items"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Total"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Status"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[61] = t32;
        $[62] = t33;
        $[63] = t34;
        $[64] = t35;
        $[65] = t36;
        $[66] = t37;
    } else {
        t32 = $[61];
        t33 = $[62];
        t34 = $[63];
        t35 = $[64];
        t36 = $[65];
        t37 = $[66];
    }
    let t38;
    if ($[67] !== user?.role) {
        t38 = user?.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Cost"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 446,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Profit"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 446,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true);
        $[67] = user?.role;
        $[68] = t38;
    } else {
        t38 = $[68];
    }
    let t39;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
            children: "Actions"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-50/50 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    t32,
                    t33,
                    t34,
                    t35,
                    t36,
                    t37,
                    t38,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                lineNumber: 461,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[70] = t38;
        $[71] = t40;
    } else {
        t40 = $[71];
    }
    let t41;
    if ($[72] !== filteredTransactions || $[73] !== handleCancelTransaction || $[74] !== user?.role) {
        let t42;
        if ($[76] !== handleCancelTransaction || $[77] !== user?.role) {
            t42 = ({
                "CheckoutPage[filteredTransactions.map()]": (transaction_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-white/50 transition-colors cursor-pointer", transaction_0.status === "cancelled" && "opacity-60"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: formatDate(transaction_0.timestamp)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 210
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500",
                                            children: formatTime(transaction_0.timestamp)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 306
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 179
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 135
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HashtagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HashtagIcon$3e$__["HashtagIcon"], {
                                            className: "w-4 h-4 text-gray-400 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-gray-900",
                                            children: transaction_0.id
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 534
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 401
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                            className: "w-4 h-4 text-gray-400 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 699
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-900",
                                            children: transaction_0.cashierName
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 750
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 664
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 620
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CubeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CubeIcon$3e$__["CubeIcon"], {
                                            className: "w-4 h-4 text-gray-400 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 914
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-900",
                                            children: transaction_0.itemCount
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 965
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 879
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 835
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: formatCurrency(transaction_0.totalAmount)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 1092
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 1048
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction_0.status === "completed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                                    children: [
                                        transaction_0.status === "completed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                            className: "w-3 h-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 1475
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircleIcon$3e$__["XCircleIcon"], {
                                            className: "w-3 h-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 1522
                                        }, this),
                                        transaction_0.status
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 1243
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 1199
                            }, this),
                            user?.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: formatCurrency(transaction_0.items.reduce(_CheckoutPageFilteredTransactionsMapTransaction_0ItemsReduce, 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 1670
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 1626
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-green-600",
                                            children: formatCurrency(transaction_0.totalProfit)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 1875
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 1831
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "CheckoutPage[filteredTransactions.map() > <button>.onClick]": (e_0)=>{
                                                    e_0.stopPropagation();
                                                    setSelectedTransaction(transaction_0);
                                                }
                                            }["CheckoutPage[filteredTransactions.map() > <button>.onClick]"],
                                            className: "inline-flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EyeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeIcon$3e$__["EyeIcon"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 202
                                                }, this),
                                                "View"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 2072
                                        }, this),
                                        user?.role === "admin" && transaction_0.status === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "CheckoutPage[filteredTransactions.map() > <button>.onClick]": (e_1)=>{
                                                    e_1.stopPropagation();
                                                    handleCancelTransaction(transaction_0.id);
                                                }
                                            }["CheckoutPage[filteredTransactions.map() > <button>.onClick]"],
                                            className: "inline-flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 200
                                                }, this),
                                                "Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 313
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 2031
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                                lineNumber: 476,
                                columnNumber: 1987
                            }, this)
                        ]
                    }, transaction_0.id, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                        lineNumber: 472,
                        columnNumber: 70
                    }, this)
            })["CheckoutPage[filteredTransactions.map()]"];
            $[76] = handleCancelTransaction;
            $[77] = user?.role;
            $[78] = t42;
        } else {
            t42 = $[78];
        }
        t41 = filteredTransactions.map(t42);
        $[72] = filteredTransactions;
        $[73] = handleCancelTransaction;
        $[74] = user?.role;
        $[75] = t41;
    } else {
        t41 = $[75];
    }
    let t42;
    if ($[79] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "bg-white/30 divide-y divide-gray-200 backdrop-blur-sm",
            children: t41
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[79] = t41;
        $[80] = t42;
    } else {
        t42 = $[80];
    }
    let t43;
    if ($[81] !== t40 || $[82] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full",
            children: [
                t40,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[81] = t40;
        $[82] = t42;
        $[83] = t43;
    } else {
        t43 = $[83];
    }
    let t44;
    if ($[84] !== filteredTransactions.length || $[85] !== user?.role) {
        t44 = filteredTransactions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                    className: "w-12 h-12 text-gray-400 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 521,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-medium text-gray-900 mb-2",
                    children: "No transactions found"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 521,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: user?.role === "admin" ? "No transactions available for your branch." : "No transactions found. Complete some sales to see them here."
                }, void 0, false, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
                    lineNumber: 521,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 521,
            columnNumber: 48
        }, this);
        $[84] = filteredTransactions.length;
        $[85] = user?.role;
        $[86] = t44;
    } else {
        t44 = $[86];
    }
    let t45;
    if ($[87] !== t43 || $[88] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[87] = t43;
        $[88] = t44;
        $[89] = t45;
    } else {
        t45 = $[89];
    }
    let t46;
    if ($[90] !== t31 || $[91] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t17,
            animate: t18,
            transition: t19,
            className: "bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden",
            children: [
                t31,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[90] = t31;
        $[91] = t45;
        $[92] = t46;
    } else {
        t46 = $[92];
    }
    let t47;
    if ($[93] !== TransactionDetailModal || $[94] !== selectedTransaction) {
        t47 = selectedTransaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransactionDetailModal, {
            transaction: selectedTransaction,
            onClose: {
                "CheckoutPage[<TransactionDetailModal>.onClose]": ()=>setSelectedTransaction(null)
            }["CheckoutPage[<TransactionDetailModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 548,
            columnNumber: 34
        }, this);
        $[93] = TransactionDetailModal;
        $[94] = selectedTransaction;
        $[95] = t47;
    } else {
        t47 = $[95];
    }
    let t48;
    if ($[96] !== t15 || $[97] !== t16 || $[98] !== t46 || $[99] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t15,
                t16,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/checkout/page.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[96] = t15;
        $[97] = t16;
        $[98] = t46;
        $[99] = t47;
        $[100] = t48;
    } else {
        t48 = $[100];
    }
    return t48;
}
_s(CheckoutPage, "VvhPa0SCjA2bK0GP+GBdDYBmVkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"]
    ];
});
_c = CheckoutPage;
function _CheckoutPageFilteredTransactionsMapTransaction_0ItemsReduce(sum_0, item_1) {
    return sum_0 + item_1.costPrice * item_1.quantity;
}
function _CheckoutPageTransactionDetailModalTransactionItemsReduce(sum, item_0) {
    return sum + item_0.costPrice * item_0.quantity;
}
function _CheckoutPageTransactionDetailModalMotionDivOnClick(e) {
    return e.stopPropagation();
}
function _CheckoutPagePrintReport() {
    window.print();
}
function _CheckoutPageExportToCSVAnonymous(row) {
    return row.join(",");
}
function _CheckoutPageFormatDate(timestamp_0) {
    return new Date(timestamp_0).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}
function _CheckoutPageFormatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });
}
function _CheckoutPageFormatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
}
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_pos%2Bsystem_pos_system1_src_c5353cd0._.js.map