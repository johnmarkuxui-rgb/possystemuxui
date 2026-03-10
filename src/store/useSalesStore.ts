'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface TransactionItem {
  id: string
  name: string
  quantity: number
  price: number
  costPrice: number
  total: number
  profit: number
}

export interface Transaction {
  id: string
  timestamp: string
  cashierId: string
  cashierName: string
  items: TransactionItem[]
  totalAmount: number
  totalProfit: number
  itemCount: number
  status: 'completed' | 'cancelled'
  tenantId: string
  paymentMethod: 'cash' | 'card'
}

export interface SalesStore {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void
  cancelTransaction: (transactionId: string) => void
  getTransactionsByTenant: (tenantId: string) => Transaction[]
  getTransactionsByCashier: (cashierId: string, tenantId: string) => Transaction[]
  getTransactionById: (transactionId: string) => Transaction | undefined
  getSalesMetrics: (userId: string, role: 'admin' | 'staff', tenantId: string) => {
    totalTransactions: number
    grossSales: number
    netProfit: number
    averageOrderValue: number
    totalItems: number
    completedTransactions: number
    cancelledTransactions: number
  }
}

export const useSalesStore = create<SalesStore>()(
  persist(
    (set, get) => ({
      transactions: [
        {
          id: 'TXN-001',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
          cashierId: 'cashier-001',
          cashierName: 'John Smith',
          items: [
            { id: '1', name: 'Coca Cola', quantity: 2, price: 1.50, costPrice: 0.80, total: 3.00, profit: 1.40 },
            { id: '2', name: 'Sandwich', quantity: 1, price: 5.99, costPrice: 3.20, total: 5.99, profit: 2.79 }
          ],
          totalAmount: 8.99,
          totalProfit: 4.19,
          itemCount: 3,
          status: 'completed',
          tenantId: 'branch-a',
          paymentMethod: 'cash'
        },
        {
          id: 'TXN-002',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
          cashierId: 'cashier-002',
          cashierName: 'Sarah Johnson',
          items: [
            { id: '3', name: 'Coffee', quantity: 1, price: 3.50, costPrice: 1.20, total: 3.50, profit: 2.30 },
            { id: '4', name: 'Muffin', quantity: 2, price: 2.99, costPrice: 1.50, total: 5.98, profit: 2.98 }
          ],
          totalAmount: 9.48,
          totalProfit: 5.28,
          itemCount: 3,
          status: 'completed',
          tenantId: 'branch-a',
          paymentMethod: 'card'
        },
        {
          id: 'TXN-003',
          timestamp: new Date(Date.now() - 10800000).toISOString(),
          cashierId: 'cashier-001',
          cashierName: 'John Smith',
          items: [
            { id: '5', name: 'Water Bottle', quantity: 1, price: 1.99, costPrice: 0.90, total: 1.99, profit: 1.09 }
          ],
          totalAmount: 1.99,
          totalProfit: 1.09,
          itemCount: 1,
          status: 'completed',
          tenantId: 'branch-a',
          paymentMethod: 'cash'
        }
      ],

      addTransaction: (transactionData) => {
        const newTransaction: Transaction = {
          ...transactionData,
          id: `TXN-${Date.now()}`,
          timestamp: new Date().toISOString(),
          totalAmount: transactionData.items.reduce((sum, item) => sum + item.total, 0),
          totalProfit: transactionData.items.reduce((sum, item) => sum + item.profit, 0),
          itemCount: transactionData.items.reduce((sum, item) => sum + item.quantity, 0)
        }

        set((state) => ({
          transactions: [newTransaction, ...state.transactions]
        }))
      },

      cancelTransaction: (transactionId) => {
        set((state) => ({
          transactions: state.transactions.map(transaction =>
            transaction.id === transactionId
              ? { ...transaction, status: 'cancelled' as const }
              : transaction
          )
        }))
      },

      getTransactionsByTenant: (tenantId) => {
        return get().transactions.filter(transaction => transaction.tenantId === tenantId)
      },

      getTransactionsByCashier: (cashierId, tenantId) => {
        return get().transactions.filter(
          transaction => transaction.cashierId === cashierId && transaction.tenantId === tenantId
        )
      },

      getTransactionById: (transactionId) => {
        return get().transactions.find(transaction => transaction.id === transactionId)
      },

      getSalesMetrics: (userId, role, tenantId) => {
        const state = get()
        let filteredTransactions: Transaction[]

        // Apply RBAC filtering
        if (role === 'admin') {
          // Admin sees all transactions for their tenant
          filteredTransactions = state.getTransactionsByTenant(tenantId)
        } else {
          // Staff sees only their own transactions
          filteredTransactions = state.getTransactionsByCashier(userId, tenantId)
        }

        const completedTransactions = filteredTransactions.filter(t => t.status === 'completed')
        const cancelledTransactions = filteredTransactions.filter(t => t.status === 'cancelled')

        return {
          totalTransactions: filteredTransactions.length,
          grossSales: completedTransactions.reduce((sum, t) => sum + t.totalAmount, 0),
          netProfit: completedTransactions.reduce((sum, t) => sum + t.totalProfit, 0),
          averageOrderValue: completedTransactions.length > 0
            ? completedTransactions.reduce((sum, t) => sum + t.totalAmount, 0) / completedTransactions.length
            : 0,
          totalItems: completedTransactions.reduce((sum, t) => sum + t.itemCount, 0),
          completedTransactions: completedTransactions.length,
          cancelledTransactions: cancelledTransactions.length
        }
      }
    }),
    {
      name: 'sales-storage',
      partialize: (state) => ({ transactions: state.transactions })
    }
  )
)