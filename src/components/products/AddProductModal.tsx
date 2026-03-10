'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { useProductStore } from '@/store/useProductStore'
import { useAuthStore } from '@/store/useAuthStore'

interface AddProductModalProps {
  isOpen: boolean
  onClose: () => void
  product?: any
}

export function AddProductModal({ isOpen, onClose, product }: AddProductModalProps) {
  const { addProduct, updateProduct, products } = useProductStore()
  const { getCurrentTenant, isAdmin } = useAuthStore()
  const skuInputRef = useRef<HTMLInputElement>(null)
  
  const currentTenant = getCurrentTenant()
  const userIsAdmin = isAdmin()
  
  // Get last used category from localStorage or use empty string
  const getLastUsedCategory = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lastUsedCategory') || ''
    }
    return ''
  }

  const [formData, setFormData] = useState({
    name: '',
    category: getLastUsedCategory(),
    price: '',
    costPrice: '',
    stock: '',
    unit: 'pcs',
    sku: '',
    lowStockAlert: '',
    supplier: '',
    expiryDate: ''
  })

  const mode = product ? 'edit' : 'add'
  const profitPerUnit = formData.costPrice && formData.price ? 
    parseFloat(formData.price) - parseFloat(formData.costPrice) : 0

  // Auto-focus SKU field when modal opens
  useEffect(() => {
    if (isOpen && !product) {
      setTimeout(() => {
        skuInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, product])

  // Remember last used category
  useEffect(() => {
    if (formData.category && typeof window !== 'undefined') {
      localStorage.setItem('lastUsedCategory', formData.category)
    }
  }, [formData.category])

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || '',
        price: product.price?.toString() || '',
        costPrice: userIsAdmin ? (product.costPrice?.toString() || '') : '',
        stock: product.stock?.toString() || '',
        unit: product.unit || 'pcs',
        sku: product.sku || '',
        lowStockAlert: product.lowStockAlert?.toString() || '',
        supplier: userIsAdmin ? (product.supplier || '') : '',
        expiryDate: product.expiryDate || ''
      })
    } else {
      setFormData({
        name: '',
        category: getLastUsedCategory(),
        price: '',
        costPrice: '',
        stock: '',
        unit: 'pcs',
        sku: '',
        lowStockAlert: '',
        supplier: '',
        expiryDate: ''
      })
    }
  }, [mode, product, isOpen, userIsAdmin])

  // Generate unique SKU
  const generateSKU = () => {
    let newSKU: string
    let attempts = 0
    const maxAttempts = 100
    
    do {
      // Generate 8-12 digit random number
      const length = Math.floor(Math.random() * 5) + 8 // 8-12 digits
      newSKU = Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, '0')
      attempts++
    } while (products.some(p => p.sku === newSKU) && attempts < maxAttempts)
    
    if (attempts >= maxAttempts) {
      // Fallback: use timestamp if can't generate unique random
      newSKU = Date.now().toString().slice(-10)
    }
    
    setFormData(prev => ({ ...prev, sku: newSKU }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      return
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
      tenantId: currentTenant || 'default'
    }

    if (mode === 'add') {
      addProduct(productData)
    } else {
      updateProduct(product.id, productData)
    }

    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-emerald-50 rounded-t-xl">
              <h2 className="text-xl font-semibold text-gray-900">
                {mode === 'add' ? 'Add New Product' : 'Edit Product'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="size-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SKU/Barcode *
                  </label>
                  <div className="flex gap-2">
                    <input
                      ref={skuInputRef}
                      type="text"
                      value={formData.sku}
                      onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="Enter or generate SKU"
                      required
                    />
                    <button
                      type="button"
                      onClick={generateSKU}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                      title="Auto-generate SKU"
                    >
                      <SparklesIcon className="size-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Softdrinks">Softdrinks</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Household">Household</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Others">Others</option>
                    <option value="Canned Goods & Meat">Canned Goods & Meat</option>
                    <option value="Noodles & Pasta">Noodles & Pasta</option>
                    <option value="Coffee, Milk & Drinks">Coffee, Milk & Drinks</option>
                    <option value="Snacks & Biscuits">Snacks & Biscuits</option>
                    <option value="Condiments & Cooking">Cooking & Condiments</option>
                    <option value="Laundry & Cleaning">Laundry & Cleaning</option>
                    <option value="Toiletries & Personal Care">Toiletries & Personal Care</option>
                    <option value="Liquor & Cigarettes">Liqour & Cigarettes</option>
                    <option value="OTC Medicines & Health">OTC Medicines & Health</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                  >
                    <option value="pcs">Pieces</option>
                    <option value="kg">Kilograms</option>
                    <option value="g">Grams</option>
                    <option value="L">Liters</option>
                    <option value="ml">Milliliters</option>
                    <option value="pack">Pack</option>
                    <option value="box">Box</option>
                  </select>
                </div>

                {userIsAdmin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cost Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.costPrice}
                      onChange={(e) => setFormData(prev => ({ ...prev, costPrice: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                      placeholder="0.00"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selling Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    placeholder="0.00"
                    required
                  />
                  {userIsAdmin && profitPerUnit > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      Profit per unit: ₱{profitPerUnit.toFixed(2)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    placeholder="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Low Stock Alert
                  </label>
                  <input
                    type="number"
                    value={formData.lowStockAlert}
                    onChange={(e) => setFormData(prev => ({ ...prev, lowStockAlert: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
                    placeholder="Leave empty for no alert"
                  />
                </div>

                {userIsAdmin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Supplier
                    </label>
                    <input
                      type="text"
                      value={formData.supplier}
                      onChange={(e) => setFormData(prev => ({ ...prev, supplier: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter supplier name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-colors border border-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-linear-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {mode === 'add' ? 'Add Product' : 'Update Product'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}