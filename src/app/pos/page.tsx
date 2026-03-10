'use client'
import { useState, useEffect, useRef } from 'react'
import { ProductCard } from '@/components/pos/ProductCard'
import { CartSidebar } from '@/components/pos/CartSidebar'
import { useProductStore } from '@/store/useProductStore'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function POSPage() {
  const products = useProductStore((state) => state.products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Get unique categories from products
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category))).filter(Boolean)]

  // Filter products based on search term and category
  useEffect(() => {
    let filtered = products

    // Filter by category first
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Then filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        (product.sku && product.sku.toLowerCase().includes(term))
      )
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, products])

  // Keyboard shortcut to focus search bar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">POS Terminal</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="size-5 text-gray-400" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Search product name or SKU..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
              ⌘K
            </span>
          </div>
        </div>

        {/* Category Tabs - Savemore Style */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                stock={product.stock}
              />
            ))
          ) : searchTerm ? (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center text-gray-500 col-span-full">
              No products found in inventory.
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center text-gray-500 col-span-full">
              No products available. Please add products from the Products page.
            </div>
          )}
        </div>
      </div>
      <div>
        <CartSidebar />
      </div>
    </div>
  )
}