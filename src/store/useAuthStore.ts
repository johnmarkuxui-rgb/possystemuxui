import { create } from 'zustand'

export type UserRole = 'admin' | 'staff'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  tenantId: string
}

export interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  logout: () => void
  getCurrentTenant: () => string | null
  getUserRole: () => UserRole | null
  isAdmin: () => boolean
  isStaff: () => boolean
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  
  setUser: (user) => {
    set({ user, isAuthenticated: true })
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false })
  },
  
  getCurrentTenant: () => {
    const { user } = get()
    return user?.tenantId || null
  },
  
  getUserRole: () => {
    const { user } = get()
    return user?.role || null
  },
  
  isAdmin: () => {
    const { user } = get()
    return user?.role === 'admin'
  },
  
  isStaff: () => {
    const { user } = get()
    return user?.role === 'staff'
  }
}))