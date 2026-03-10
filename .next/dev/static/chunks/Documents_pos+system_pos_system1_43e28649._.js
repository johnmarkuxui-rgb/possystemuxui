(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/pos+system/pos_system1/src/store/useSalesStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesStore",
    ()=>useSalesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useSalesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        sales: [],
        addSale: (sale)=>{
            const newSale = {
                ...sale,
                id: Date.now().toString(),
                date: new Date()
            };
            set((state)=>({
                    sales: [
                        ...state.sales,
                        newSale
                    ]
                }));
        },
        getSalesForPeriod: (startDate, endDate, tenantId)=>{
            const { sales } = get();
            return sales.filter((sale)=>{
                const saleDate = new Date(sale.date);
                const dateMatch = saleDate >= startDate && saleDate <= endDate;
                const tenantMatch = tenantId ? sale.tenantId === tenantId : true;
                return dateMatch && tenantMatch;
            });
        },
        getSalesForLast30Days: (tenantId)=>{
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
            return get().getSalesForPeriod(startDate, endDate, tenantId);
        },
        getGrossIncome: (startDate, endDate, tenantId)=>{
            const sales = get().getSalesForPeriod(startDate, endDate, tenantId);
            return sales.reduce((total, sale)=>total + sale.total, 0);
        },
        getNetIncome: (startDate, endDate, tenantId)=>{
            const sales = get().getSalesForPeriod(startDate, endDate, tenantId);
            return sales.reduce((total, sale)=>{
                const costOfGoods = sale.items.reduce((cost, item)=>{
                    return cost + (item.costPrice ? item.costPrice * item.qty : 0);
                }, 0);
                // Net income = (sale.total after discount) - costOfGoods
                return total + (sale.total - costOfGoods);
            }, 0);
        },
        getDailySalesData: (days, tenantId)=>{
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - days);
            const sales = get().getSalesForPeriod(startDate, endDate, tenantId);
            const dailyData = new Map();
            // Initialize all days with zero
            for(let i = 0; i <= days; i++){
                const date = new Date();
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                dailyData.set(dateStr, {
                    total: 0,
                    count: 0
                });
            }
            // Aggregate sales by date
            sales.forEach((sale)=>{
                const dateStr = new Date(sale.date).toISOString().split('T')[0];
                const existing = dailyData.get(dateStr) || {
                    total: 0,
                    count: 0
                };
                dailyData.set(dateStr, {
                    total: existing.total + sale.total,
                    count: existing.count + 1
                });
            });
            // Convert to array and sort by date
            return Array.from(dailyData.entries()).map(([date, data])=>({
                    date: new Date(date).toLocaleDateString('en-PH', {
                        month: 'short',
                        day: 'numeric'
                    }),
                    total: data.total,
                    count: data.count
                })).sort((a, b)=>new Date(a.date).getTime() - new Date(b.date).getTime());
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/src/store/useProductStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        products: [],
        addProduct: (product)=>{
            const newProduct = {
                ...product,
                id: Date.now().toString()
            };
            set((state)=>({
                    products: [
                        ...state.products,
                        newProduct
                    ]
                }));
        },
        updateProduct: (id, updates)=>{
            set((state)=>({
                    products: state.products.map((product)=>product.id === id ? {
                            ...product,
                            ...updates
                        } : product)
                }));
        },
        deleteProduct: (id)=>{
            set((state)=>({
                    products: state.products.filter((product)=>product.id !== id)
                }));
        },
        getProductsByTenant: (tenantId)=>{
            const { products } = get();
            return products.filter((product)=>product.tenantId === tenantId);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js [app-client] (ecmascript) <export default as UserGroupIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingUpIcon.js [app-client] (ecmascript) <export default as ArrowTrendingUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingDownIcon$3e$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingDownIcon.js [app-client] (ecmascript) <export default as ArrowTrendingDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useSalesStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/src/store/useAuthStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(139);
    if ($[0] !== "0f7a49d6f043c5a8da9cf2d4d51b9fa68078810216475f89778a7e053ce1f1c3") {
        for(let $i = 0; $i < 139; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f7a49d6f043c5a8da9cf2d4d51b9fa68078810216475f89778a7e053ce1f1c3";
    }
    const { getSalesForLast30Days, getGrossIncome, getNetIncome } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"])();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])();
    const { getCurrentTenant, isAdmin, isStaff } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [activePeriod, setActivePeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Today");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            totalRevenue: 0,
            totalOrders: 0,
            customerCount: 0,
            lowStockCount: 0,
            profitMargin: 0,
            isLoading: true
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [dashboardData, setDashboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== getCurrentTenant) {
        t1 = getCurrentTenant();
        $[2] = getCurrentTenant;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const currentTenant = t1;
    let t2;
    if ($[4] !== isAdmin) {
        t2 = isAdmin();
        $[4] = isAdmin;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const userIsAdmin = t2;
    isStaff();
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "Today",
            "Week",
            "Month",
            "Year"
        ];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const periods = t3;
    let t4;
    let t5;
    if ($[7] !== activePeriod || $[8] !== currentTenant || $[9] !== getGrossIncome || $[10] !== getNetIncome || $[11] !== getSalesForLast30Days || $[12] !== products || $[13] !== userIsAdmin) {
        t4 = ({
            "DashboardPage[useEffect()]": ()=>{
                const calculateDashboardData = {
                    "DashboardPage[useEffect() > calculateDashboardData]": ()=>{
                        const now = new Date();
                        const startDate = new Date();
                        bb3: switch(activePeriod){
                            case "Today":
                                {
                                    startDate.setHours(0, 0, 0, 0);
                                    break bb3;
                                }
                            case "Week":
                                {
                                    startDate.setDate(now.getDate() - 7);
                                    break bb3;
                                }
                            case "Month":
                                {
                                    startDate.setDate(now.getDate() - 30);
                                    break bb3;
                                }
                            case "Year":
                                {
                                    startDate.setFullYear(now.getFullYear() - 1);
                                }
                        }
                        const sales = getSalesForLast30Days(currentTenant || undefined).filter({
                            "DashboardPage[useEffect() > calculateDashboardData > (anonymous)()]": (sale)=>{
                                const saleDate = new Date(sale.date);
                                return saleDate >= startDate && saleDate <= now;
                            }
                        }["DashboardPage[useEffect() > calculateDashboardData > (anonymous)()]"]);
                        const totalRevenue = sales.reduce(_DashboardPageUseEffectCalculateDashboardDataSalesReduce, 0);
                        const totalOrders = sales.length;
                        const customerCount = new Set(sales.map(_DashboardPageUseEffectCalculateDashboardDataSalesMap)).size;
                        const tenantProducts = currentTenant ? products.filter({
                            "DashboardPage[useEffect() > calculateDashboardData > products.filter()]": (p)=>p.tenantId === currentTenant
                        }["DashboardPage[useEffect() > calculateDashboardData > products.filter()]"]) : products;
                        const lowStockCount = tenantProducts.filter(_DashboardPageUseEffectCalculateDashboardDataTenantProductsFilter).length;
                        let profitMargin = 0;
                        if (userIsAdmin) {
                            const gross = getGrossIncome(startDate, now, currentTenant || undefined);
                            const net = getNetIncome(startDate, now, currentTenant || undefined);
                            profitMargin = gross > 0 ? net / gross * 100 : 0;
                        }
                        setDashboardData({
                            totalRevenue,
                            totalOrders,
                            customerCount,
                            lowStockCount,
                            profitMargin,
                            isLoading: false
                        });
                    }
                }["DashboardPage[useEffect() > calculateDashboardData]"];
                calculateDashboardData();
                const interval = setInterval(calculateDashboardData, 5000);
                return ()=>clearInterval(interval);
            }
        })["DashboardPage[useEffect()]"];
        t5 = [
            activePeriod,
            getSalesForLast30Days,
            getGrossIncome,
            getNetIncome,
            products,
            currentTenant,
            userIsAdmin
        ];
        $[7] = activePeriod;
        $[8] = currentTenant;
        $[9] = getGrossIncome;
        $[10] = getNetIncome;
        $[11] = getSalesForLast30Days;
        $[12] = products;
        $[13] = userIsAdmin;
        $[14] = t4;
        $[15] = t5;
    } else {
        t4 = $[14];
        t5 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const formatCurrency = _DashboardPageFormatCurrency;
    let t6;
    if ($[16] !== dashboardData.totalRevenue) {
        t6 = formatCurrency(dashboardData.totalRevenue);
        $[16] = dashboardData.totalRevenue;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const t7 = dashboardData.totalRevenue > 0 ? "+" : "";
    let t8;
    if ($[18] !== t6 || $[19] !== t7) {
        t8 = {
            title: "Total Revenue",
            amount: t6,
            change: t7,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"],
            iconColor: "bg-emerald-100 text-emerald-600",
            trend: "up"
        };
        $[18] = t6;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== dashboardData.totalOrders) {
        t9 = dashboardData.totalOrders.toString();
        $[21] = dashboardData.totalOrders;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const t10 = dashboardData.totalOrders > 0 ? "+" : "";
    let t11;
    if ($[23] !== t10 || $[24] !== t9) {
        t11 = {
            title: "Total Orders",
            amount: t9,
            change: t10,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"],
            iconColor: "bg-blue-100 text-blue-600",
            trend: "up"
        };
        $[23] = t10;
        $[24] = t9;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== dashboardData.customerCount) {
        t12 = dashboardData.customerCount.toString();
        $[26] = dashboardData.customerCount;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    const t13 = dashboardData.customerCount > 0 ? "+" : "";
    let t14;
    if ($[28] !== t12 || $[29] !== t13) {
        t14 = {
            title: "Customer Count",
            amount: t12,
            change: t13,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"],
            iconColor: "bg-purple-100 text-purple-600",
            trend: "up"
        };
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== dashboardData.lowStockCount) {
        t15 = dashboardData.lowStockCount.toString();
        $[31] = dashboardData.lowStockCount;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    const t16 = dashboardData.lowStockCount > 0 ? "\u26A0\uFE0F" : "\u2713";
    const t17 = dashboardData.lowStockCount > 0 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600";
    const t18 = dashboardData.lowStockCount > 0 ? "down" : "up";
    let t19;
    if ($[33] !== t15 || $[34] !== t16 || $[35] !== t17 || $[36] !== t18) {
        t19 = {
            title: "Low Stock Alerts",
            amount: t15,
            change: t16,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"],
            iconColor: t17,
            trend: t18
        };
        $[33] = t15;
        $[34] = t16;
        $[35] = t17;
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t11 || $[39] !== t14 || $[40] !== t19 || $[41] !== t8) {
        t20 = [
            t8,
            t11,
            t14,
            t19
        ];
        $[38] = t11;
        $[39] = t14;
        $[40] = t19;
        $[41] = t8;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    const stats = t20;
    const t21 = currentTenant || undefined;
    let recentSales;
    let t22;
    let t23;
    let t24;
    let t25;
    let t26;
    let t27;
    let t28;
    let t29;
    let t30;
    let t31;
    if ($[43] !== activePeriod || $[44] !== dashboardData.isLoading || $[45] !== dashboardData.profitMargin || $[46] !== getSalesForLast30Days || $[47] !== stats || $[48] !== t21 || $[49] !== userIsAdmin) {
        recentSales = getSalesForLast30Days(t21).slice(-5).reverse();
        t28 = "p-6 space-y-6";
        let t32;
        if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 286,
                columnNumber: 13
            }, this);
            $[61] = t32;
        } else {
            t32 = $[61];
        }
        if ($[62] !== activePeriod) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t32,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: periods.map({
                            "DashboardPage[periods.map()]": (period)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "DashboardPage[periods.map() > <button>.onClick]": ()=>setActivePeriod(period)
                                    }["DashboardPage[periods.map() > <button>.onClick]"],
                                    className: `px-4 py-2 rounded-lg font-medium transition-all ${activePeriod === period ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`,
                                    children: period
                                }, period, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 55
                                }, this)
                        }["DashboardPage[periods.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 292,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 292,
                columnNumber: 13
            }, this);
            $[62] = activePeriod;
            $[63] = t29;
        } else {
            t29 = $[63];
        }
        if ($[64] !== stats) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                children: stats.map(_DashboardPageStatsMap)
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this);
            $[64] = stats;
            $[65] = t30;
        } else {
            t30 = $[65];
        }
        if ($[66] !== dashboardData.profitMargin || $[67] !== userIsAdmin) {
            t31 = userIsAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-emerald-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                            className: "size-6 text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 245
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 198
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: "Profit Margin"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 308
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Net profit as percentage of revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 378
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 303
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 310,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-emerald-600",
                                children: [
                                    dashboardData.profitMargin.toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 310,
                                columnNumber: 466
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-linear-to-r from-emerald-400 to-emerald-600 h-3 rounded-full transition-all duration-500",
                            style: {
                                width: `${Math.min(dashboardData.profitMargin, 100)}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                            lineNumber: 310,
                            columnNumber: 624
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 571
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 310,
                columnNumber: 27
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-gray-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"], {
                                            className: "size-6 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 245
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 201
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: "Profit Margin"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 305
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Access restricted to Admin users"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 375
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 300
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 160
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-gray-400 ml-4",
                                children: "***"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 460
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 312,
                        columnNumber: 105
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-300 h-3 rounded-full",
                            style: {
                                width: "0%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                            lineNumber: 312,
                            columnNumber: 583
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 312,
                        columnNumber: 530
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 312,
                columnNumber: 31
            }, this);
            $[66] = dashboardData.profitMargin;
            $[67] = userIsAdmin;
            $[68] = t31;
        } else {
            t31 = $[68];
        }
        t26 = "bg-white rounded-xl border border-gray-200 p-6 shadow-sm";
        let t33;
        if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-gray-900",
                children: "Recent Sales"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 324,
                columnNumber: 13
            }, this);
            $[69] = t33;
        } else {
            t33 = $[69];
        }
        const t34 = dashboardData.isLoading ? "Updating..." : "Live Data";
        if ($[70] !== t34) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    t33,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-500",
                        children: t34
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 331,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 331,
                columnNumber: 13
            }, this);
            $[70] = t34;
            $[71] = t27;
        } else {
            t27 = $[71];
        }
        t25 = "overflow-x-auto";
        t23 = "w-full";
        let t35;
        let t36;
        let t37;
        let t38;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "text-left py-3 px-4 text-gray-600 font-medium",
                children: "Time"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 344,
                columnNumber: 13
            }, this);
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "text-left py-3 px-4 text-gray-600 font-medium",
                children: "Items"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this);
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "text-left py-3 px-4 text-gray-600 font-medium",
                children: "Payment"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 346,
                columnNumber: 13
            }, this);
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "text-right py-3 px-4 text-gray-600 font-medium",
                children: "Amount"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 347,
                columnNumber: 13
            }, this);
            $[72] = t35;
            $[73] = t36;
            $[74] = t37;
            $[75] = t38;
        } else {
            t35 = $[72];
            t36 = $[73];
            t37 = $[74];
            t38 = $[75];
        }
        let t39;
        if ($[76] !== userIsAdmin) {
            t39 = userIsAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: "text-right py-3 px-4 text-gray-600 font-medium",
                children: "Profit"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 360,
                columnNumber: 28
            }, this);
            $[76] = userIsAdmin;
            $[77] = t39;
        } else {
            t39 = $[77];
        }
        if ($[78] !== t39) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "border-b border-gray-200",
                    children: [
                        t35,
                        t36,
                        t37,
                        t38,
                        t39
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                    lineNumber: 367,
                    columnNumber: 20
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 367,
                columnNumber: 13
            }, this);
            $[78] = t39;
            $[79] = t24;
        } else {
            t24 = $[79];
        }
        let t40;
        if ($[80] !== userIsAdmin) {
            t40 = ({
                "DashboardPage[recentSales.map()]": (sale_2)=>{
                    const costOfGoods = sale_2.items.reduce(_DashboardPageRecentSalesMapSale_2ItemsReduce, 0);
                    const profit = sale_2.total - costOfGoods;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "border-b border-gray-100 hover:bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-3 px-4 text-sm text-gray-900",
                                children: new Date(sale_2.date).toLocaleTimeString("en-PH", {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 379,
                                columnNumber: 92
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-3 px-4 text-sm text-gray-900",
                                children: [
                                    sale_2.items.length,
                                    " item",
                                    sale_2.items.length !== 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-3 px-4 text-sm text-gray-900 capitalize",
                                children: sale_2.paymentMethod
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-3 px-4 text-sm font-medium text-emerald-600 text-right",
                                children: formatCurrency(sale_2.total)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 226
                            }, this),
                            userIsAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "py-3 px-4 text-sm font-medium text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: profit >= 0 ? "text-green-600" : "text-red-600",
                                    children: formatCurrency(profit)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 408
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 351
                            }, this)
                        ]
                    }, sale_2.id, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 379,
                        columnNumber: 18
                    }, this);
                }
            })["DashboardPage[recentSales.map()]"];
            $[80] = userIsAdmin;
            $[81] = t40;
        } else {
            t40 = $[81];
        }
        t22 = recentSales.map(t40);
        $[43] = activePeriod;
        $[44] = dashboardData.isLoading;
        $[45] = dashboardData.profitMargin;
        $[46] = getSalesForLast30Days;
        $[47] = stats;
        $[48] = t21;
        $[49] = userIsAdmin;
        $[50] = recentSales;
        $[51] = t22;
        $[52] = t23;
        $[53] = t24;
        $[54] = t25;
        $[55] = t26;
        $[56] = t27;
        $[57] = t28;
        $[58] = t29;
        $[59] = t30;
        $[60] = t31;
    } else {
        recentSales = $[50];
        t22 = $[51];
        t23 = $[52];
        t24 = $[53];
        t25 = $[54];
        t26 = $[55];
        t27 = $[56];
        t28 = $[57];
        t29 = $[58];
        t30 = $[59];
        t31 = $[60];
    }
    let t32;
    if ($[82] !== recentSales.length || $[83] !== userIsAdmin) {
        t32 = recentSales.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "py-8 px-4 text-center text-gray-500",
                colSpan: userIsAdmin ? 5 : 4,
                children: "No recent sales data available"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 424,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 424,
            columnNumber: 39
        }, this);
        $[82] = recentSales.length;
        $[83] = userIsAdmin;
        $[84] = t32;
    } else {
        t32 = $[84];
    }
    let t33;
    if ($[85] !== t22 || $[86] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: [
                t22,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[85] = t22;
        $[86] = t32;
        $[87] = t33;
    } else {
        t33 = $[87];
    }
    let t34;
    if ($[88] !== t23 || $[89] !== t24 || $[90] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t23,
            children: [
                t24,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[88] = t23;
        $[89] = t24;
        $[90] = t33;
        $[91] = t34;
    } else {
        t34 = $[91];
    }
    let t35;
    if ($[92] !== t25 || $[93] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t25,
            children: t34
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[92] = t25;
        $[93] = t34;
        $[94] = t35;
    } else {
        t35 = $[94];
    }
    let t36;
    if ($[95] !== t26 || $[96] !== t27 || $[97] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t26,
            children: [
                t27,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[95] = t26;
        $[96] = t27;
        $[97] = t35;
        $[98] = t36;
    } else {
        t36 = $[98];
    }
    let t37;
    let t38;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 bg-emerald-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CurrencyDollarIcon$3e$__["CurrencyDollarIcon"], {
                className: "size-5 text-emerald-600"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 472,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-emerald-600 font-medium",
            children: "Today's Revenue"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, this);
        $[99] = t37;
        $[100] = t38;
    } else {
        t37 = $[99];
        t38 = $[100];
    }
    let t39;
    if ($[101] !== dashboardData.totalRevenue) {
        t39 = formatCurrency(dashboardData.totalRevenue);
        $[101] = dashboardData.totalRevenue;
        $[102] = t39;
    } else {
        t39 = $[102];
    }
    let t40;
    if ($[103] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-emerald-50 border border-emerald-200 rounded-lg p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t37,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t38,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-emerald-900",
                                children: t39
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 490,
                                columnNumber: 139
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 490,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 490,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 490,
            columnNumber: 11
        }, this);
        $[103] = t39;
        $[104] = t40;
    } else {
        t40 = $[104];
    }
    let t41;
    let t42;
    if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-2 bg-blue-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"], {
                className: "size-5 text-blue-600"
            }, void 0, false, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 499,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-blue-600 font-medium",
            children: "Active Orders"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[105] = t41;
        $[106] = t42;
    } else {
        t41 = $[105];
        t42 = $[106];
    }
    let t43;
    if ($[107] !== dashboardData.totalOrders) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t41,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            t42,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-blue-900",
                                children: dashboardData.totalOrders
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 509,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 509,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 509,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[107] = dashboardData.totalOrders;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    const t44 = `${dashboardData.lowStockCount > 0 ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"} border rounded-lg p-4`;
    const t45 = `p-2 ${dashboardData.lowStockCount > 0 ? "bg-red-100" : "bg-green-100"} rounded-lg`;
    const t46 = `size-5 ${dashboardData.lowStockCount > 0 ? "text-red-600" : "text-green-600"}`;
    let t47;
    if ($[109] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
            className: t46
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[109] = t46;
        $[110] = t47;
    } else {
        t47 = $[110];
    }
    let t48;
    if ($[111] !== t45 || $[112] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t45,
            children: t47
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[111] = t45;
        $[112] = t47;
        $[113] = t48;
    } else {
        t48 = $[113];
    }
    const t49 = `text-sm ${dashboardData.lowStockCount > 0 ? "text-red-600" : "text-green-600"} font-medium`;
    let t50;
    if ($[114] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t49,
            children: "Stock Status"
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 538,
            columnNumber: 11
        }, this);
        $[114] = t49;
        $[115] = t50;
    } else {
        t50 = $[115];
    }
    const t51 = `text-lg font-bold ${dashboardData.lowStockCount > 0 ? "text-red-900" : "text-green-900"}`;
    const t52 = dashboardData.lowStockCount > 0 ? `${dashboardData.lowStockCount} Alerts` : "All Good";
    let t53;
    if ($[116] !== t51 || $[117] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t51,
            children: t52
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[116] = t51;
        $[117] = t52;
        $[118] = t53;
    } else {
        t53 = $[118];
    }
    let t54;
    if ($[119] !== t50 || $[120] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t50,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[119] = t50;
        $[120] = t53;
        $[121] = t54;
    } else {
        t54 = $[121];
    }
    let t55;
    if ($[122] !== t48 || $[123] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t48,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[122] = t48;
        $[123] = t54;
        $[124] = t55;
    } else {
        t55 = $[124];
    }
    let t56;
    if ($[125] !== t44 || $[126] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t44,
            children: t55
        }, void 0, false, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 575,
            columnNumber: 11
        }, this);
        $[125] = t44;
        $[126] = t55;
        $[127] = t56;
    } else {
        t56 = $[127];
    }
    let t57;
    if ($[128] !== t40 || $[129] !== t43 || $[130] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-3",
            children: [
                t40,
                t43,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 584,
            columnNumber: 11
        }, this);
        $[128] = t40;
        $[129] = t43;
        $[130] = t56;
        $[131] = t57;
    } else {
        t57 = $[131];
    }
    let t58;
    if ($[132] !== t28 || $[133] !== t29 || $[134] !== t30 || $[135] !== t31 || $[136] !== t36 || $[137] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t28,
            children: [
                t29,
                t30,
                t31,
                t36,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[132] = t28;
        $[133] = t29;
        $[134] = t30;
        $[135] = t31;
        $[136] = t36;
        $[137] = t57;
        $[138] = t58;
    } else {
        t58 = $[138];
    }
    return t58;
}
_s(DashboardPage, "G7fgxLzec8gVk/293lpDWsMMIiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useSalesStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = DashboardPage;
function _DashboardPageRecentSalesMapSale_2ItemsReduce(cost, item) {
    return cost + (item.costPrice ? item.costPrice * item.qty : 0);
}
function _DashboardPageStatsMap(stat, index) {
    const Icon = stat.icon;
    const TrendIcon = stat.trend === "up" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingUpIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingUpIcon$3e$__["ArrowTrendingUpIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTrendingDownIcon$3e$__["ArrowTrendingDownIcon"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-3 rounded-lg ${stat.iconColor}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-6"
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                            lineNumber: 613,
                            columnNumber: 238
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 613,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendIcon, {
                                className: `size-4 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 613,
                                columnNumber: 312
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`,
                                children: stat.change
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                                lineNumber: 613,
                                columnNumber: 405
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 613,
                        columnNumber: 271
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 613,
                columnNumber: 130
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: stat.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 613,
                        columnNumber: 563
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-gray-900",
                        children: stat.amount
                    }, void 0, false, {
                        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                        lineNumber: 613,
                        columnNumber: 616
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
                lineNumber: 613,
                columnNumber: 536
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Documents/pos+system/pos_system1/src/app/page.tsx",
        lineNumber: 613,
        columnNumber: 10
    }, this);
}
function _DashboardPageFormatCurrency(amount) {
    return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP"
    }).format(amount);
}
function _DashboardPageUseEffectCalculateDashboardDataTenantProductsFilter(product) {
    return product.lowStockAlert && product.stock <= product.lowStockAlert && product.stock > 0;
}
function _DashboardPageUseEffectCalculateDashboardDataSalesMap(sale_1) {
    return sale_1.paymentMethod + sale_1.date.toISOString();
}
function _DashboardPageUseEffectCalculateDashboardDataSalesReduce(sum, sale_0) {
    return sum + sale_0.total;
}
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function CurrencyDollarIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](CurrencyDollarIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript) <export default as CurrencyDollarIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencyDollarIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CurrencyDollarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js [app-client] (ecmascript)");
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
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ExclamationTriangleIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ExclamationTriangleIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExclamationTriangleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript)");
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
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingDownIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function ArrowTrendingDownIcon({ title, titleId, ...props }, svgRef) {
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
        d: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](ArrowTrendingDownIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingDownIcon.js [app-client] (ecmascript) <export default as ArrowTrendingDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowTrendingDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2b$system$2f$pos_system1$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTrendingDownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos+system/pos_system1/node_modules/@heroicons/react/24/outline/esm/ArrowTrendingDownIcon.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_pos%2Bsystem_pos_system1_43e28649._.js.map