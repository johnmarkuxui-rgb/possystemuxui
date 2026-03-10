'use client'
import { useState } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { useAuthStore } from '@/store/useAuthStore'
import { ExclamationTriangleIcon, ExclamationCircleIcon, DocumentDuplicateIcon, PlusIcon } from '@heroicons/react/24/outline'

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(amount)
}

const formatDate = (dateString?: string) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getStockStatus = (stock: number, lowStockAlert?: number) => {
  if (stock <= 0) return { status: 'Out of Stock', color: 'text-red-600 bg-red-50', icon: ExclamationCircleIcon }
  if (lowStockAlert && stock <= lowStockAlert) return { status: 'Low Stock', color: 'text-amber-600 bg-amber-50', icon: ExclamationTriangleIcon }
  return { status: 'Good', color: 'text-green-600 bg-green-50', icon: null }
}

const isNearExpiry = (expiryDate?: string) => {
  if (!expiryDate) return false
  const today = new Date()
  const expiry = new Date(expiryDate)
  const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return daysUntilExpiry <= 30 && daysUntilExpiry > 0
}

const isExpiringSoon = (expiryDate?: string) => {
  if (!expiryDate) return false
  const today = new Date()
  const expiry = new Date(expiryDate)
  const monthsUntilExpiry = (expiry.getFullYear() - today.getFullYear()) * 12 + (expiry.getMonth() - today.getMonth())
  return monthsUntilExpiry <= 3 && monthsUntilExpiry >= 0
}

export function InventoryTable() {
  const { products, updateProduct, addProduct } = useProductStore()
  const { getCurrentTenant, isAdmin } = useAuthStore()
  const [quickAddStock, setQuickAddStock] = useState<{[key: string]: number}>({})
  
  const currentTenant = getCurrentTenant()
  const userIsAdmin = isAdmin()
  
  // Filter products by tenant
  const tenantProducts = currentTenant ? products.filter(p => p.tenantId === currentTenant) : products

  // Clone product function
  const handleClone = (product: any) => {
    const clonedProduct = {
      ...product,
      id: Date.now().toString(), // Generate new ID
      sku: '', // Clear SKU for new entry
      name: `${product.name} (Copy)`,
      stock: 0 // Reset stock
    }
    addProduct(clonedProduct)
  }

  // Quick stock addition
  const handleQuickStockAdd = (productId: string, currentStock: number) => {
    const addAmount = quickAddStock[productId] || 1
    updateProduct(productId, { stock: currentStock + addAmount })
    setQuickAddStock(prev => ({ ...prev, [productId]: 0 }))
  }

  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Inventory Overview</h2>
        <div className="text-sm text-gray-500">
          Total Products: {tenantProducts.length}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-24">Actions</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 min-w-32">SKU/Barcode</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 min-w-48">Product Name</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Category</th>
                {userIsAdmin && <th className="text-left py-4 px-6 font-medium text-gray-700 w-28">Cost Price</th>}
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-28">Selling Price</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Stock</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-28">Status</th>
                {userIsAdmin && <th className="text-left py-4 px-6 font-medium text-gray-700 min-w-36">Supplier</th>}
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Expiry Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {tenantProducts.length === 0 ? (
                <tr>
                  <td colSpan={userIsAdmin ? 10 : 8} className="text-center py-12 text-gray-500">
                    No inventory data available
                  </td>
                </tr>
              ) : (
                tenantProducts.map((product) => {
                  const stockStatus = getStockStatus(product.stock, product.lowStockAlert)
                  const nearExpiry = isNearExpiry(product.expiryDate)
                  const expiringSoon = isExpiringSoon(product.expiryDate)
                  const profitPerUnit = product.costPrice ? product.price - product.costPrice : 0

                  return (
                    <tr 
                      key={product.id} 
                      className={`hover:bg-gray-50 transition-colors ${
                        product.lowStockAlert && product.stock <= product.lowStockAlert && product.stock > 0 
                          ? 'bg-red-50' 
                          : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleClone(product)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Clone Product"
                          >
                            <DocumentDuplicateIcon className="size-4" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-mono text-sm text-gray-900">
                          {product.sku || '-'}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{product.name}</div>
                          {nearExpiry && (
                            <div className="text-xs text-amber-600 flex items-center gap-1">
                              <ExclamationTriangleIcon className="size-3" />
                              Near Expiry
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {product.category}
                        </span>
                      </td>
                      {userIsAdmin && (
                        <td className="py-4 px-6">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              {product.costPrice ? formatCurrency(product.costPrice) : '-'}
                            </div>
                            {product.costPrice && (
                              <div className="text-xs text-green-600 font-medium">
                                Profit: {formatCurrency(profitPerUnit)}
                              </div>
                            )}
                          </div>
                        </td>
                      )}
                      <td className="py-4 px-6">
                        <div className="font-medium text-gray-900">
                          {formatCurrency(product.price)}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div>
                              <div className="font-medium text-gray-900">{product.stock} {product.unit}</div>
                              {product.lowStockAlert && (
                                <div className="text-xs text-gray-500">
                                  Alert: {product.lowStockAlert} {product.unit}
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => handleQuickStockAdd(product.id, product.stock)}
                              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Quick Add Stock"
                            >
                              <PlusIcon className="size-4" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                            {stockStatus.icon && <stockStatus.icon className="size-3" />}
                            {stockStatus.status}
                          </span>
                          {product.lowStockAlert && product.stock <= product.lowStockAlert && product.stock > 0 && (
                            <div className="text-xs text-amber-600 font-medium">⚠️ Low Stock Alert</div>
                          )}
                        </div>
                      </td>
                      {userIsAdmin && (
                        <td className="py-4 px-6">
                          <div className="text-gray-600">
                            {product.supplier || '-'}
                          </div>
                        </td>
                      )}
                      <td className="py-4 px-6">
                        <div className={expiringSoon ? 'text-red-600 font-medium' : 'text-gray-600'}>
                          {formatDate(product.expiryDate)}
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}