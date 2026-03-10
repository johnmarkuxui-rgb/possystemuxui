import { create } from 'zustand'

export type CartItem = {
  id: string
  name: string
  price: number
  qty: number
}

type State = {
  items: CartItem[]
  discount: number
}

type Actions = {
  add: (item: Omit<CartItem, 'qty'>) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  setDiscount: (value: number) => void
  clear: () => void
}

export const useCart = create<State & Actions>(set => ({
  items: [],
  discount: 0,
  add: item => set(s => {
    const exist = s.items.find(i => i.id === item.id)
    if (exist) {
      return { items: s.items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i) }
    }
    return { items: [...s.items, { ...item, qty: 1 }] }
  }),
  remove: id => set(s => ({ items: s.items.filter(i => i.id !== id) })),
  setQty: (id, qty) => set(s => ({ items: s.items.map(i => i.id === id ? { ...i, qty } : i) })),
  setDiscount: value => set({ discount: value }),
  clear: () => set({ items: [], discount: 0 })
}))

export const totals = (items: CartItem[], discountPercent: number) => {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const tax = subtotal * 0.12
  const discountAmount = subtotal * (discountPercent / 100)
  const total = Math.max(0, subtotal + tax - discountAmount)
  return { subtotal, tax, discount: discountAmount, total, discountPercent }
}
