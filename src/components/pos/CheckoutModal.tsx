'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/store/cart'
import confetti from 'canvas-confetti'
import { useSalesStore } from '@/store/useSalesStore'
import { useProductStore } from '@/store/useProductStore'
import { useAuthStore } from '@/store/useAuthStore'

interface CheckoutModalProps {
  total: number
  subtotal: number
  tax: number
  discount: number
  items: Array<{
    id: string
    name: string
    price: number
    qty: number
  }>
}

export function CheckoutModal({ total, subtotal, tax, discount, items }: CheckoutModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [method, setMethod] = useState<'cash' | 'gcash' | 'card' | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  
  const clearCart = useCart(s => s.clear)
  const addTransaction = useSalesStore(s => s.addTransaction)
  const products = useProductStore(s => s.products)
  const updateProduct = useProductStore(s => s.updateProduct)
  const { user, getCurrentTenant } = useAuthStore()
  const currentTenant = getCurrentTenant()

  const handleConfirm = async () => {
    if (!method) return
    
    setIsProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Deduct stock from inventory
    items.forEach(item => {
      const product = products.find(p => p.id === item.id)
      if (product) {
        const newStock = Math.max(0, product.stock - item.qty)
        updateProduct(item.id, { stock: newStock })
      }
    })
    
    // Trigger confetti animation
    triggerConfetti()
    
    // Save transaction to sales store
    const saleItems = items.map(item => {
      const product = products.find(p => p.id === item.id)
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        costPrice: product?.costPrice
      }
    })
    
    addTransaction({
      cashierId: user?.id || 'cashier-001',
      cashierName: user?.name || 'Cashier Terminal',
      items: saleItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.qty,
        price: item.price,
        costPrice: item.costPrice || 0,
        total: item.price * item.qty,
        profit: (item.price - (item.costPrice || 0)) * item.qty
      })),
      totalAmount: total,
      totalProfit: saleItems.reduce((sum, item) => sum + ((item.price - (item.costPrice || 0)) * item.qty), 0),
      itemCount: saleItems.reduce((sum, item) => sum + item.qty, 0),
      status: 'completed',
      tenantId: currentTenant || 'default',
      paymentMethod: method === 'gcash' ? 'card' : method
    })
    
    // Clear cart and close modal
    clearCart()
    setIsProcessing(false)
    setIsOpen(false)
    setMethod(null)
  }

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
      })
    } catch (error) {
      console.log('Confetti animation skipped')
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', { 
      style: 'currency', 
      currency: 'PHP' 
    }).format(amount)
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Checkout {formatCurrency(total)}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl border border-slate-100 p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Select Payment</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XMarkIcon className="size-5 text-gray-500" />
                </button>
              </div>

              {/* Order Summary */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (12%)</span>
                    <span className="font-medium">{formatCurrency(tax)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount ({((discount / subtotal) * 100).toFixed(1)}%)</span>
                      <span className="font-medium text-green-600">-{formatCurrency(discount)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setMethod('cash')}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    method === 'cash'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">Cash</div>
                  <div className="text-sm text-gray-500">Pay with physical money</div>
                </button>

                <button
                  onClick={() => setMethod('gcash')}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    method === 'gcash'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">GCash</div>
                  <div className="text-sm text-gray-500">Pay with mobile wallet</div>
                </button>

                <button
                  onClick={() => setMethod('card')}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    method === 'card'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">Pay with bank card</div>
                </button>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleConfirm}
                  disabled={!method || isProcessing}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    method && !isProcessing
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : method ? (
                    <>
                      <CheckBadgeIcon className="size-4" />
                      Confirm Payment
                    </>
                  ) : (
                    'Choose Method'
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}