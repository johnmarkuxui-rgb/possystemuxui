import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { UserRole } from './useAuthStore'

export interface User {
  id: string
  username: string
  password: string
  name: string
  email: string
  role: UserRole
  tenantId: string
  createdAt: string
  lastLogin?: string
}

export interface UserStore {
  users: User[]
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void
  removeUser: (userId: string) => void
  updateUser: (userId: string, updates: Partial<User>) => void
  getUsersByTenant: (tenantId: string) => User[]
  findUserByCredentials: (username: string, password: string, tenantId: string) => User | null
  changePassword: (userId: string, currentPassword: string, newPassword: string) => boolean
}

const generateId = () => Math.random().toString(36).substr(2, 9)

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      users: [
        // Default admin user
        {
          id: 'admin-001',
          username: 'admin',
          password: 'admin123',
          name: 'System Administrator',
          email: 'admin@company.com',
          role: 'admin',
          tenantId: 'default-tenant',
          createdAt: new Date().toISOString()
        }
      ],

      addUser: (userData) => {
        const newUser: User = {
          ...userData,
          id: generateId(),
          createdAt: new Date().toISOString()
        }
        set((state) => ({
          users: [...state.users, newUser]
        }))
      },

      removeUser: (userId) => {
        set((state) => ({
          users: state.users.filter(user => user.id !== userId)
        }))
      },

      updateUser: (userId, updates) => {
        set((state) => ({
          users: state.users.map(user => 
            user.id === userId ? { ...user, ...updates } : user
          )
        }))
      },

      getUsersByTenant: (tenantId) => {
        const { users } = get()
        return users.filter(user => user.tenantId === tenantId)
      },

      findUserByCredentials: (username, password, tenantId) => {
        const { users } = get()
        return users.find(user => 
          user.username === username && 
          user.password === password && 
          user.tenantId === tenantId
        ) || null
      },

      changePassword: (userId, currentPassword, newPassword) => {
        const { users } = get()
        const user = users.find(u => u.id === userId)
        
        if (!user || user.password !== currentPassword) {
          return false
        }

        set((state) => ({
          users: state.users.map(u => 
            u.id === userId ? { ...u, password: newPassword } : u
          )
        }))
        
        return true
      }
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ users: state.users })
    }
  )
)