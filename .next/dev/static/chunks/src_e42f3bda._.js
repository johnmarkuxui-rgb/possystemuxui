(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/useProductStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
"[project]/src/components/products/AddProductModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddProductModal",
    ()=>AddProductModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useAuthStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AddProductModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "611fc4141eeab5880c276f450b20614702d97a2213f98b28b18dc7497f15be67") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "611fc4141eeab5880c276f450b20614702d97a2213f98b28b18dc7497f15be67";
    }
    const { isOpen, onClose, product } = t0;
    const { addProduct, updateProduct, products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])();
    const { getCurrentTenant, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const skuInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== getCurrentTenant) {
        t1 = getCurrentTenant();
        $[1] = getCurrentTenant;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const currentTenant = t1;
    let t2;
    if ($[3] !== isAdmin) {
        t2 = isAdmin();
        $[3] = isAdmin;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const userIsAdmin = t2;
    const getLastUsedCategory = _AddProductModalGetLastUsedCategory;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            name: "",
            category: getLastUsedCategory(),
            price: "",
            costPrice: "",
            stock: "",
            unit: "pcs",
            sku: "",
            lowStockAlert: "",
            supplier: "",
            expiryDate: ""
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const mode = product ? "edit" : "add";
    const profitPerUnit = formData.costPrice && formData.price ? parseFloat(formData.price) - parseFloat(formData.costPrice) : 0;
    let t4;
    let t5;
    if ($[6] !== isOpen || $[7] !== product) {
        t4 = ({
            "AddProductModal[useEffect()]": ()=>{
                if (isOpen && !product) {
                    setTimeout({
                        "AddProductModal[useEffect() > setTimeout()]": ()=>{
                            skuInputRef.current?.focus();
                        }
                    }["AddProductModal[useEffect() > setTimeout()]"], 100);
                }
            }
        })["AddProductModal[useEffect()]"];
        t5 = [
            isOpen,
            product
        ];
        $[6] = isOpen;
        $[7] = product;
        $[8] = t4;
        $[9] = t5;
    } else {
        t4 = $[8];
        t5 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[10] !== formData.category) {
        t6 = ({
            "AddProductModal[useEffect()]": ()=>{
                if (formData.category && ("TURBOPACK compile-time value", "object") !== "undefined") {
                    localStorage.setItem("lastUsedCategory", formData.category);
                }
            }
        })["AddProductModal[useEffect()]"];
        t7 = [
            formData.category
        ];
        $[10] = formData.category;
        $[11] = t6;
        $[12] = t7;
    } else {
        t6 = $[11];
        t7 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[13] !== product || $[14] !== userIsAdmin) {
        t8 = ({
            "AddProductModal[useEffect()]": ()=>{
                if (product) {
                    setFormData({
                        name: product.name || "",
                        category: product.category || "",
                        price: product.price?.toString() || "",
                        costPrice: userIsAdmin ? product.costPrice?.toString() || "" : "",
                        stock: product.stock?.toString() || "",
                        unit: product.unit || "pcs",
                        sku: product.sku || "",
                        lowStockAlert: product.lowStockAlert?.toString() || "",
                        supplier: userIsAdmin ? product.supplier || "" : "",
                        expiryDate: product.expiryDate || ""
                    });
                } else {
                    setFormData({
                        name: "",
                        category: getLastUsedCategory(),
                        price: "",
                        costPrice: "",
                        stock: "",
                        unit: "pcs",
                        sku: "",
                        lowStockAlert: "",
                        supplier: "",
                        expiryDate: ""
                    });
                }
            }
        })["AddProductModal[useEffect()]"];
        $[13] = product;
        $[14] = userIsAdmin;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== isOpen || $[17] !== mode || $[18] !== product || $[19] !== userIsAdmin) {
        t9 = [
            mode,
            product,
            isOpen,
            userIsAdmin
        ];
        $[16] = isOpen;
        $[17] = mode;
        $[18] = product;
        $[19] = userIsAdmin;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[21] !== products) {
        t10 = ({
            "AddProductModal[generateSKU]": ()=>{
                let newSKU;
                let attempts = 0;
                do {
                    const length = Math.floor(Math.random() * 5) + 8;
                    newSKU = Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, "0");
                    attempts++;
                }while (products.some({
                    "AddProductModal[generateSKU > products.some()]": (p)=>p.sku === newSKU
                }["AddProductModal[generateSKU > products.some()]"]) && attempts < 100)
                if (attempts >= 100) {
                    newSKU = Date.now().toString().slice(-10);
                }
                setFormData({
                    "AddProductModal[generateSKU > setFormData()]": (prev)=>({
                            ...prev,
                            sku: newSKU
                        })
                }["AddProductModal[generateSKU > setFormData()]"]);
            }
        })["AddProductModal[generateSKU]"];
        $[21] = products;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    const generateSKU = t10;
    let t11;
    if ($[23] !== addProduct || $[24] !== currentTenant || $[25] !== formData.category || $[26] !== formData.costPrice || $[27] !== formData.expiryDate || $[28] !== formData.lowStockAlert || $[29] !== formData.name || $[30] !== formData.price || $[31] !== formData.sku || $[32] !== formData.stock || $[33] !== formData.supplier || $[34] !== formData.unit || $[35] !== mode || $[36] !== onClose || $[37] !== product || $[38] !== updateProduct) {
        t11 = ({
            "AddProductModal[handleSubmit]": (e)=>{
                e.preventDefault();
                if (!formData.name || !formData.category || !formData.price || !formData.stock) {
                    return;
                }
                const productData = {
                    name: formData.name,
                    category: formData.category,
                    price: parseFloat(formData.price),
                    costPrice: formData.costPrice ? parseFloat(formData.costPrice) : undefined,
                    stock: parseInt(formData.stock),
                    unit: formData.unit,
                    sku: formData.sku || undefined,
                    lowStockAlert: formData.lowStockAlert ? parseInt(formData.lowStockAlert) : undefined,
                    supplier: formData.supplier || undefined,
                    expiryDate: formData.expiryDate || undefined,
                    tenantId: currentTenant || "default"
                };
                if (mode === "add") {
                    addProduct(productData);
                } else {
                    updateProduct(product.id, productData);
                }
                onClose();
            }
        })["AddProductModal[handleSubmit]"];
        $[23] = addProduct;
        $[24] = currentTenant;
        $[25] = formData.category;
        $[26] = formData.costPrice;
        $[27] = formData.expiryDate;
        $[28] = formData.lowStockAlert;
        $[29] = formData.name;
        $[30] = formData.price;
        $[31] = formData.sku;
        $[32] = formData.stock;
        $[33] = formData.supplier;
        $[34] = formData.unit;
        $[35] = mode;
        $[36] = onClose;
        $[37] = product;
        $[38] = updateProduct;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    const handleSubmit = t11;
    let t12;
    if ($[40] !== formData.category || $[41] !== formData.costPrice || $[42] !== formData.expiryDate || $[43] !== formData.lowStockAlert || $[44] !== formData.name || $[45] !== formData.price || $[46] !== formData.sku || $[47] !== formData.stock || $[48] !== formData.supplier || $[49] !== formData.unit || $[50] !== generateSKU || $[51] !== handleSubmit || $[52] !== isOpen || $[53] !== mode || $[54] !== onClose || $[55] !== profitPerUnit || $[56] !== userIsAdmin) {
        t12 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center p-4 z-50",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                className: "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20",
                onClick: _AddProductModalMotionDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-emerald-50 rounded-t-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-900",
                                children: mode === "add" ? "Add New Product" : "Edit Product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                lineNumber: 268,
                                columnNumber: 300
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                    className: "size-5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/AddProductModal.tsx",
                                    lineNumber: 268,
                                    columnNumber: 499
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                lineNumber: 268,
                                columnNumber: 410
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                        lineNumber: 268,
                        columnNumber: 165
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Product Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 268,
                                                columnNumber: 676
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.name,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_1)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_0)=>({
                                                                    ...prev_0,
                                                                    name: e_1.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                placeholder: "Enter product name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 268,
                                                columnNumber: 762
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 268,
                                        columnNumber: 671
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "SKU/Barcode *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 275,
                                                columnNumber: 267
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: skuInputRef,
                                                        type: "text",
                                                        value: formData.sku,
                                                        onChange: {
                                                            "AddProductModal[<input>.onChange]": (e_2)=>setFormData({
                                                                    "AddProductModal[<input>.onChange > setFormData()]": (prev_1)=>({
                                                                            ...prev_1,
                                                                            sku: e_2.target.value
                                                                        })
                                                                }["AddProductModal[<input>.onChange > setFormData()]"])
                                                        }["AddProductModal[<input>.onChange]"],
                                                        className: "flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                        placeholder: "Enter or generate SKU",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 380
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: generateSKU,
                                                        className: "p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center",
                                                        title: "Auto-generate SKU",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                            className: "size-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 450
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 261
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 275,
                                                columnNumber: 352
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 275,
                                        columnNumber: 262
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Category *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 282,
                                                columnNumber: 511
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.category,
                                                onChange: {
                                                    "AddProductModal[<select>.onChange]": (e_3)=>setFormData({
                                                            "AddProductModal[<select>.onChange > setFormData()]": (prev_2)=>({
                                                                    ...prev_2,
                                                                    category: e_3.target.value
                                                                })
                                                        }["AddProductModal[<select>.onChange > setFormData()]"])
                                                }["AddProductModal[<select>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 222
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Canned Goods",
                                                        children: "Canned Goods"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 263
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Softdrinks",
                                                        children: "Softdrinks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 313
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Snacks",
                                                        children: "Snacks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 359
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Dairy",
                                                        children: "Dairy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 397
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Frozen",
                                                        children: "Frozen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 433
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Household",
                                                        children: "Household"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 471
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Personal Care",
                                                        children: "Personal Care"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 515
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Others",
                                                        children: "Others"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 567
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Canned Goods & Meat",
                                                        children: "Canned Goods & Meat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 605
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Noodles & Pasta",
                                                        children: "Noodles & Pasta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 673
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Coffee, Milk & Drinks",
                                                        children: "Coffee, Milk & Drinks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 733
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Snacks & Biscuits",
                                                        children: "Snacks & Biscuits"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 805
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Condiments & Cooking",
                                                        children: "Cooking & Condiments"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 869
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Laundry & Cleaning",
                                                        children: "Laundry & Cleaning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 939
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Toiletries & Personal Care",
                                                        children: "Toiletries & Personal Care"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 1005
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Liquor & Cigarettes",
                                                        children: "Liqour & Cigarettes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 1087
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "OTC Medicines & Health",
                                                        children: "OTC Medicines & Health"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 1155
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Miscellaneous",
                                                        children: "Miscellaneous"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 1229
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 282,
                                                columnNumber: 593
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 282,
                                        columnNumber: 506
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Unit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 289,
                                                columnNumber: 1301
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.unit,
                                                onChange: {
                                                    "AddProductModal[<select>.onChange]": (e_4)=>setFormData({
                                                            "AddProductModal[<select>.onChange > setFormData()]": (prev_3)=>({
                                                                    ...prev_3,
                                                                    unit: e_4.target.value
                                                                })
                                                        }["AddProductModal[<select>.onChange > setFormData()]"])
                                                }["AddProductModal[<select>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "pcs",
                                                        children: "Pieces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 206
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "kg",
                                                        children: "Kilograms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 241
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "g",
                                                        children: "Grams"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 278
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "L",
                                                        children: "Liters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 310
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ml",
                                                        children: "Milliliters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 343
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "pack",
                                                        children: "Pack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 382
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "box",
                                                        children: "Box"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 416
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 289,
                                                columnNumber: 1377
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 289,
                                        columnNumber: 1296
                                    }, this),
                                    userIsAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Cost Price"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 296,
                                                columnNumber: 484
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: formData.costPrice,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_5)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_4)=>({
                                                                    ...prev_4,
                                                                    costPrice: e_5.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                placeholder: "0.00"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 296,
                                                columnNumber: 566
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 296,
                                        columnNumber: 479
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Selling Price *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 238
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: formData.price,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_6)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_5)=>({
                                                                    ...prev_5,
                                                                    price: e_6.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                placeholder: "0.00",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 325
                                            }, this),
                                            userIsAdmin && profitPerUnit > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-green-600 mt-1",
                                                children: [
                                                    "Profit per unit: ₱",
                                                    profitPerUnit.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 310,
                                                columnNumber: 279
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 303,
                                        columnNumber: 233
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Stock Quantity *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 310,
                                                columnNumber: 382
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: formData.stock,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_7)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_6)=>({
                                                                    ...prev_6,
                                                                    stock: e_7.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                placeholder: "0",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 310,
                                                columnNumber: 470
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 310,
                                        columnNumber: 377
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Low Stock Alert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 317,
                                                columnNumber: 250
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: formData.lowStockAlert,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_8)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_7)=>({
                                                                    ...prev_7,
                                                                    lowStockAlert: e_8.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm",
                                                placeholder: "Leave empty for no alert"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 317,
                                                columnNumber: 337
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 317,
                                        columnNumber: 245
                                    }, this),
                                    userIsAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Supplier"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 324,
                                                columnNumber: 273
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.supplier,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_9)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_8)=>({
                                                                    ...prev_8,
                                                                    supplier: e_9.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                placeholder: "Enter supplier name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 324,
                                                columnNumber: 353
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 324,
                                        columnNumber: 268
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Expiry Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 331,
                                                columnNumber: 224
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: formData.expiryDate,
                                                onChange: {
                                                    "AddProductModal[<input>.onChange]": (e_10)=>setFormData({
                                                            "AddProductModal[<input>.onChange > setFormData()]": (prev_9)=>({
                                                                    ...prev_9,
                                                                    expiryDate: e_10.target.value
                                                                })
                                                        }["AddProductModal[<input>.onChange > setFormData()]"])
                                                }["AddProductModal[<input>.onChange]"],
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                                lineNumber: 331,
                                                columnNumber: 307
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 331,
                                        columnNumber: 219
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                lineNumber: 268,
                                columnNumber: 616
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 text-gray-700 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-colors border border-gray-200",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 338,
                                        columnNumber: 235
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-4 py-2 bg-linear-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl",
                                        children: mode === "add" ? "Add Product" : "Update Product"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                                        lineNumber: 338,
                                        columnNumber: 425
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/AddProductModal.tsx",
                                lineNumber: 338,
                                columnNumber: 190
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/products/AddProductModal.tsx",
                        lineNumber: 268,
                        columnNumber: 560
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/products/AddProductModal.tsx",
                lineNumber: 259,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/products/AddProductModal.tsx",
            lineNumber: 253,
            columnNumber: 21
        }, this);
        $[40] = formData.category;
        $[41] = formData.costPrice;
        $[42] = formData.expiryDate;
        $[43] = formData.lowStockAlert;
        $[44] = formData.name;
        $[45] = formData.price;
        $[46] = formData.sku;
        $[47] = formData.stock;
        $[48] = formData.supplier;
        $[49] = formData.unit;
        $[50] = generateSKU;
        $[51] = handleSubmit;
        $[52] = isOpen;
        $[53] = mode;
        $[54] = onClose;
        $[55] = profitPerUnit;
        $[56] = userIsAdmin;
        $[57] = t12;
    } else {
        t12 = $[57];
    }
    let t13;
    if ($[58] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/products/AddProductModal.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[58] = t12;
        $[59] = t13;
    } else {
        t13 = $[59];
    }
    return t13;
}
_s(AddProductModal, "1MiA1MVw3sF+sdnWvuIhP9yfKhY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AddProductModal;
function _AddProductModalMotionDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _AddProductModalGetLastUsedCategory() {
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem("lastUsedCategory") || "";
    }
    //TURBOPACK unreachable
    ;
}
var _c;
__turbopack_context__.k.register(_c, "AddProductModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/products/DeleteConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteConfirmModal",
    ()=>DeleteConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ExclamationTriangleIcon.js [app-client] (ecmascript) <export default as ExclamationTriangleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowPathIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowPathIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js [app-client] (ecmascript) <export default as ArrowPathIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-client] (ecmascript) <export default as CheckCircleIcon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function DeleteConfirmModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "729e5902d1f780e0ab84494acb0c67ea1607552ba69fe5c7b3f5dda10c124aa0") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "729e5902d1f780e0ab84494acb0c67ea1607552ba69fe5c7b3f5dda10c124aa0";
    }
    const { isOpen, onClose, onConfirm, productName } = t0;
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onClose || $[2] !== onConfirm) {
        t1 = ({
            "DeleteConfirmModal[handleDelete]": async ()=>{
                setIsDeleting(true);
                await new Promise(_temp);
                onConfirm();
                setIsDeleting(false);
                setIsSuccess(true);
                setTimeout({
                    "DeleteConfirmModal[handleDelete > setTimeout()]": ()=>{
                        setIsSuccess(false);
                        onClose();
                    }
                }["DeleteConfirmModal[handleDelete > setTimeout()]"], 1000);
            }
        })["DeleteConfirmModal[handleDelete]"];
        $[1] = onClose;
        $[2] = onConfirm;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleDelete = t1;
    let t2;
    if ($[4] !== handleDelete || $[5] !== isDeleting || $[6] !== isOpen || $[7] !== isSuccess || $[8] !== onClose || $[9] !== productName) {
        t2 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 300
                },
                className: "bg-white rounded-xl border border-gray-200 p-6 w-full max-w-sm",
                onClick: _DeleteConfirmModalMotionDivOnClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-50 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationTriangleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationTriangleIcon$3e$__["ExclamationTriangleIcon"], {
                                    className: "size-6 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 134
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 80,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "Delete Product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 80,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: [
                                    'Are you sure you want to delete "',
                                    productName,
                                    '"? This action cannot be undone.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 80,
                                columnNumber: 275
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        disabled: isDeleting,
                                        className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 419
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDelete,
                                        disabled: isDeleting,
                                        className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                                        children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowPathIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowPathIcon$3e$__["ArrowPathIcon"], {
                                                    className: "size-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 839
                                                }, this),
                                                "Deleting..."
                                            ]
                                        }, void 0, true) : "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 614
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 80,
                                columnNumber: 391
                            }, this)
                        ]
                    }, "confirm", true, {
                        fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                        lineNumber: 74,
                        columnNumber: 174
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.9
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-50 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                                    className: "size-6 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 136
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 89,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "Product Deleted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 89,
                                columnNumber: 195
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "The product has been successfully removed."
                            }, void 0, false, {
                                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                                lineNumber: 89,
                                columnNumber: 272
                            }, this)
                        ]
                    }, "success", true, {
                        fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                        lineNumber: 80,
                        columnNumber: 945
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                    lineNumber: 74,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
                lineNumber: 61,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
            lineNumber: 55,
            columnNumber: 20
        }, this);
        $[4] = handleDelete;
        $[5] = isDeleting;
        $[6] = isOpen;
        $[7] = isSuccess;
        $[8] = onClose;
        $[9] = productName;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/products/DeleteConfirmModal.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_s(DeleteConfirmModal, "9r0hAGEpswii2j2sx+VARj40pCg=");
_c = DeleteConfirmModal;
function _DeleteConfirmModalMotionDivOnClick(e) {
    return e.stopPropagation();
}
function _temp(resolve) {
    return setTimeout(resolve, 1000);
}
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$AddProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/AddProductModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/products/DeleteConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PencilIcon.js [app-client] (ecmascript) <export default as PencilIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TrashIcon.js [app-client] (ecmascript) <export default as TrashIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PlusIcon.js [app-client] (ecmascript) <export default as PlusIcon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProductsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "14dabfc4a8c24a7b36a5b96a37bc3e96cc6fae4098758288805dd156e954c5ab") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14dabfc4a8c24a7b36a5b96a37bc3e96cc6fae4098758288805dd156e954c5ab";
    }
    const { products, deleteProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])();
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProductsPage[handleEditProduct]": (product)=>{
                setSelectedProduct(product);
                setIsEditModalOpen(true);
            }
        })["ProductsPage[handleEditProduct]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleEditProduct = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProductsPage[handleDeleteProduct]": (product_0)=>{
                setSelectedProduct(product_0);
                setIsDeleteModalOpen(true);
            }
        })["ProductsPage[handleDeleteProduct]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleDeleteProduct = t1;
    let t2;
    if ($[3] !== deleteProduct || $[4] !== selectedProduct) {
        t2 = ({
            "ProductsPage[handleConfirmDelete]": ()=>{
                if (selectedProduct) {
                    deleteProduct(selectedProduct.id);
                }
            }
        })["ProductsPage[handleConfirmDelete]"];
        $[3] = deleteProduct;
        $[4] = selectedProduct;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleConfirmDelete = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProductsPage[handleCloseEdit]": ()=>{
                setIsEditModalOpen(false);
                setSelectedProduct(null);
            }
        })["ProductsPage[handleCloseEdit]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleCloseEdit = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ProductsPage[handleCloseDelete]": ()=>{
                setIsDeleteModalOpen(false);
                setSelectedProduct(null);
            }
        })["ProductsPage[handleCloseDelete]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleCloseDelete = t4;
    const formatCurrency = _ProductsPageFormatCurrency;
    const AddProductButton = _ProductsPageAddProductButton;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: "Products Management"
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddProductButton, {
                    onClick: {
                        "ProductsPage[<AddProductButton>.onClick]": ()=>setIsAddModalOpen(true)
                    }["ProductsPage[<AddProductButton>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 104,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== products) {
        t7 = products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4",
            children: products.map({
                "ProductsPage[products.map()]": (product_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between hover:shadow-sm transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-gray-900",
                                                        children: product_1.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 275
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: product_1.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 348
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 270
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gray-50 px-3 py-1 rounded-lg",
                                                    children: [
                                                        product_1.stock,
                                                        " ",
                                                        product_1.unit,
                                                        " available"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 446
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 407
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 229
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: formatCurrency(product_1.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 605
                                            }, this),
                                            product_1.costPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Cost: ",
                                                    formatCurrency(product_1.costPrice)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 721
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 559
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 114,
                                columnNumber: 205
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProductsPage[products.map() > <button>.onClick]": ()=>handleEditProduct(product_1)
                                        }["ProductsPage[products.map() > <button>.onClick]"],
                                        className: "p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PencilIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilIcon$3e$__["PencilIcon"], {
                                            className: "size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 163
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 863
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProductsPage[products.map() > <button>.onClick]": ()=>handleDeleteProduct(product_1)
                                        }["ProductsPage[products.map() > <button>.onClick]"],
                                        className: "p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TrashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrashIcon$3e$__["TrashIcon"], {
                                            className: "size-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 161
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 114,
                                columnNumber: 822
                            }, this)
                        ]
                    }, product_1.id, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 114,
                        columnNumber: 54
                    }, this)
            }["ProductsPage[products.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 113,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 mb-4",
                    children: "No products available"
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 119,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProductsPage[<button>.onClick]": ()=>setIsAddModalOpen(true)
                    }["ProductsPage[<button>.onClick]"],
                    className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 121,
                            columnNumber: 168
                        }, this),
                        "Add Your First Product"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 119,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 119,
            columnNumber: 51
        }, this);
        $[10] = products;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ProductsPage[<AddProductModal>.onClose]": ()=>setIsAddModalOpen(false)
        })["ProductsPage[<AddProductModal>.onClose]"];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== isAddModalOpen) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$AddProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProductModal"], {
            isOpen: isAddModalOpen,
            onClose: t8
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[13] = isAddModalOpen;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = selectedProduct || undefined;
    let t11;
    if ($[15] !== isEditModalOpen || $[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$AddProductModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddProductModal"], {
            isOpen: isEditModalOpen,
            onClose: handleCloseEdit,
            product: t10
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[15] = isEditModalOpen;
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const t12 = selectedProduct?.name || "";
    let t13;
    if ($[18] !== handleConfirmDelete || $[19] !== isDeleteModalOpen || $[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$products$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteConfirmModal"], {
            isOpen: isDeleteModalOpen,
            onClose: handleCloseDelete,
            onConfirm: handleConfirmDelete,
            productName: t12
        }, void 0, false, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[18] = handleConfirmDelete;
        $[19] = isDeleteModalOpen;
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t11 || $[23] !== t13 || $[24] !== t7 || $[25] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t6,
                t7,
                t9,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t13;
        $[24] = t7;
        $[25] = t9;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
}
_s(ProductsPage, "cbPngUbLMWkCZMzhdjZSwMzG7XU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"]
    ];
});
_c = ProductsPage;
function _ProductsPageAddProductButton(t0) {
    const { onClick } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PlusIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusIcon$3e$__["PlusIcon"], {
                className: "size-5"
            }, void 0, false, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 182,
                columnNumber: 166
            }, this),
            "Add Product"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 182,
        columnNumber: 10
    }, this);
}
function _ProductsPageFormatCurrency(amount) {
    return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP"
    }).format(amount);
}
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e42f3bda._.js.map