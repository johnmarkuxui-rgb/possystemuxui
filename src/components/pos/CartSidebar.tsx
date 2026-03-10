'use client'
import { useCart, totals } from '@/store/cart'
import { TrashIcon } from '@heroicons/react/24/outline'
import { CheckoutModal } from './CheckoutModal'

export function CartSidebar() {
  const items = useCart(s => s.items)
  const remove = useCart(s => s.remove)
  const setQty = useCart(s => s.setQty)
  const discount = useCart(s => s.discount)
  const setDiscount = useCart(s => s.setDiscount)
  const { subtotal, tax, total } = totals(items, discount)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', { 
      style: 'currency', 
      currency: 'PHP' 
    }).format(amount)
  }

  return (
    <div className="w-96 bg-white rounded-xl border border-gray-200 p-6 space-y-6">
      <div className="text-lg font-semibold text-gray-900">Cart</div>
      <div className="space-y-4 max-h-[50vh] overflow-auto">
        {items.map(i => (
          <div key={i.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{i.name}</div>
              <div className="text-sm text-gray-600">{formatCurrency(i.price)}</div>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="number" 
                min={1} 
                value={i.qty} 
                onChange={e => setQty(i.id, Math.max(1, Number(e.target.value)))} 
                className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button 
                onClick={() => remove(i.id)} 
                className="p-1 text-gray-400 hover:text-red-600 transition-colors"
              >
                <TrashIcon className="size-4" />
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
            Cart is empty
          </div>
        )}
      </div>
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax (12%)</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-gray-600">Discount (%)</span>
          <input 
            type="number" 
            min={0} 
            max={100}
            step={0.1}
            value={discount} 
            onChange={e => setDiscount(Math.max(0, Math.min(100, Number(e.target.value))))} 
            className="w-20 border border-gray-300 rounded-lg px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
      <CheckoutModal 
        total={total} 
        subtotal={subtotal} 
        tax={tax} 
        discount={discount} 
        items={items} 
      />
    </div>
  )
}