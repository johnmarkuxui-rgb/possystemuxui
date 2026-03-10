'use client'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/store/cart'

interface ProductCardProps {
  id: string
  name: string
  price: number
  category: string
  stock: number
}

export function ProductCard({ id, name, price, category, stock }: ProductCardProps) {
  const add = useCart(s => s.add)
  
  const isLowStock = stock <= 5

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(amount)
  }
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 hover:shadow-sm transition-shadow">
      <div className="flex-1">
        <div className="text-lg font-semibold text-gray-900 mb-1">{name}</div>
        <div className="text-sm text-gray-600 mb-2">{category}</div>
        <div className="inline-flex items-center px-3 py-1 bg-emerald-500 text-white rounded-md font-bold text-lg">
          {formatCurrency(price)}
        </div>
        <div className={`text-xs mt-2 ${
          isLowStock ? 'text-red-500' : 'text-gray-500'
        }`}>
          Stock: {stock} pcs
        </div>
      </div>
      
      <button 
        onClick={() => add({ id, name, price })} 
        disabled={stock === 0}
        className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
          stock > 0
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <PlusIcon className="size-4" />
          <span>{stock > 0 ? 'Add to Cart' : 'Out of Stock'}</span>
        </div>
      </button>
    </div>
  )
}