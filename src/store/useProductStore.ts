import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  category: string
  price: number
  costPrice?: number
  stock: number
  unit: string
  sku?: string
  lowStockAlert?: number
  supplier?: string
  expiryDate?: string
  tenantId: string
}

export interface ProductStore {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  
  addProduct: (product) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString()
    }
    set((state) => ({
      products: [...state.products, newProduct]
    }))
  },
  
  updateProduct: (id, updates) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      )
    }))
  },
  
  deleteProduct: (id) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id)
    }))
  },
  
  getProductsByTenant: (tenantId: string) => {
    const { products } = get()
    return products.filter(product => product.tenantId === tenantId)
  }
}))