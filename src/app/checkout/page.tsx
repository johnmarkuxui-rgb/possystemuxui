'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CalculatorIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  PrinterIcon,
  ClockIcon,
  HashtagIcon,
  UserIcon,
  CubeIcon,
  CheckCircleIcon,
  XCircleIcon,
  TrashIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useAuthStore } from '@/store/useAuthStore'
import { useSalesStore, Transaction } from '@/store/useSalesStore'
import { formatPHP } from '@/lib/currency'
import { cn } from '@/lib/utils'

export default function CheckoutPage() {
  const { user } = useAuthStore()
  const { 
    transactions, 
    getSalesMetrics, 
    getTransactionsByTenant, 
    getTransactionsByCashier,
    cancelTransaction 
  } = useSalesStore()
  
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [loading, setLoading] = useState(true)

  // Get metrics based on user role (RBAC)
  const metrics = useMemo(() => {
    if (!user) return null
    return getSalesMetrics(user.id, user.role, user.tenantId)
  }, [user, getSalesMetrics])

  // Get filtered transactions based on user role (RBAC)
  const filteredTransactions = useMemo(() => {
    if (!user) return []
    
    if (user.role === 'admin') {
      // Admin sees all transactions for their tenant
      return getTransactionsByTenant(user.tenantId)
    } else {
      // Staff sees only their own transactions
      return getTransactionsByCashier(user.id, user.tenantId)
    }
  }, [user, transactions, getTransactionsByTenant, getTransactionsByCashier])

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const exportToCSV = () => {
    const headers = ['Transaction ID', 'Date', 'Time', 'Cashier', 'Items', 'Total', 'Payment', 'Status']
    const rows = filteredTransactions.map(t => [
      t.id,
      formatDate(t.timestamp),
      formatTime(t.timestamp),
      t.cashierName,
      t.itemCount.toString(),
      formatPHP(t.totalAmount), // Use PHP formatting for CSV
      t.paymentMethod,
      t.status
    ])

    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `daily-transactions-${user?.tenantId}-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  const printReport = () => {
    window.print()
  }

  const handleCancelTransaction = (transactionId: string) => {
    if (confirm('Are you sure you want to cancel this transaction?')) {
      cancelTransaction(transactionId)
    }
  }

  const TransactionDetailModal = ({ transaction, onClose }: { transaction: Transaction; onClose: () => void }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Transaction Details</h2>
                <p className="text-sm text-gray-500">{transaction.id} • {formatDate(transaction.timestamp)} at {formatTime(transaction.timestamp)}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {/* Transaction Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Cashier</p>
                  <p className="font-semibold">{transaction.cashierName}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p className="font-semibold capitalize">{transaction.paymentMethod}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.status === 'completed' ? (
                      <CheckCircleIcon className="w-3 h-3 mr-1" />
                    ) : (
                      <XCircleIcon className="w-3 h-3 mr-1" />
                    )}
                    {transaction.status}
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="font-semibold text-lg">{formatPHP(transaction.totalAmount)}</p>
                </div>
              </div>

              {/* Items List */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Items Sold</h3>
                <div className="space-y-3">
                  {transaction.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × {formatPHP(item.price)} = {formatPHP(item.total)}
                        </p>
                      </div>
                      
                      {/* Admin-only profit information */}
                      {user?.role === 'admin' && (
                        <div className="text-right space-y-1">
                          <p className="text-sm text-gray-500">Cost: {formatPHP(item.costPrice)}</p>
                          <p className="text-sm font-medium text-green-600">Profit: {formatPHP(item.profit)}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin-only Summary */}
              {user?.role === 'admin' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-600">Subtotal</p>
                    <p className="font-bold text-blue-900 text-lg">{formatPHP(transaction.totalAmount)}</p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-600">Total Cost</p>
                    <p className="font-bold text-gray-900 text-lg">
                      {formatPHP(transaction.items.reduce((sum, item) => sum + (item.costPrice * item.quantity), 0))}
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-600">Total Profit</p>
                    <p className="font-bold text-green-900 text-lg">{formatPHP(transaction.totalProfit)}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Daily Transactions</h1>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Daily Transactions</h1>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={exportToCSV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Export CSV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={printReport}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <PrinterIcon className="w-5 h-5" />
            Print Report
          </motion.button>
        </div>
      </div>

      {/* Summary Cards */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Transactions</p>
                <p className="text-3xl font-bold text-gray-900">{metrics.totalTransactions}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DocumentTextIcon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          {/* Gross Sales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Gross Sales</p>
                <p className="text-3xl font-bold text-gray-900">{formatPHP(metrics.grossSales)}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          {/* Admin-only Net Profit */}
          {user?.role === 'admin' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Profit</p>
                  <p className="text-3xl font-bold text-green-600">{formatPHP(metrics.netProfit)}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <ChartBarIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Staff-specific metrics */}
          {user?.role === 'staff' && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">My Sales</p>
                    <p className="text-3xl font-bold text-blue-600">{formatPHP(metrics.grossSales)}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <CurrencyDollarIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Items Sold</p>
                    <p className="text-3xl font-bold text-purple-600">{metrics.totalItems}</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <CubeIcon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>
            </>
          )}

          {/* Average Order Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: user?.role === 'admin' ? 0.3 : 0.4 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-3xl font-bold text-gray-900">{formatPHP(metrics.averageOrderValue)}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CalculatorIcon className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Transactions Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {user?.role === 'admin' ? 'All Transactions' : 'My Transactions'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing {filteredTransactions.length} transactions for {user?.tenantId}
                {user?.role === 'staff' && ' • Your transactions only'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {metrics?.completedTransactions || 0} Completed
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {metrics?.cancelledTransactions || 0} Cancelled
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Date & Time</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 min-w-36">Trans ID</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 min-w-40">Cashier</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-24">Items</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Total</th>
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-28">Status</th>
                {/* Admin-only columns */}
                {user?.role === 'admin' && (
                  <>
                    <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Cost</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700 w-32">Profit</th>
                  </>
                )}
                <th className="text-left py-4 px-6 font-medium text-gray-700 w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredTransactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    "hover:bg-gray-50 transition-colors cursor-pointer",
                    transaction.status === 'cancelled' && "opacity-60"
                  )}
                >
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{formatDate(transaction.timestamp)}</span>
                      <span className="text-xs text-gray-500">{formatTime(transaction.timestamp)}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <HashtagIcon className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-mono text-gray-900">{transaction.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{transaction.cashierName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <CubeIcon className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{transaction.itemCount}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-gray-900">{formatPHP(transaction.totalAmount)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status === 'completed' ? (
                        <CheckCircleIcon className="w-3 h-3 mr-1" />
                      ) : (
                        <XCircleIcon className="w-3 h-3 mr-1" />
                      )}
                      {transaction.status}
                    </span>
                  </td>
                  
                  {/* Admin-only columns */}
                  {user?.role === 'admin' && (
                    <>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600">
                          {formatPHP(transaction.items.reduce((sum, item) => sum + (item.costPrice * item.quantity), 0))}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-medium text-green-600">
                          {formatPHP(transaction.totalProfit)}
                        </span>
                      </td>
                    </>
                  )}

                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedTransaction(transaction)
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                      >
                        <EyeIcon className="w-4 h-4" />
                        View
                      </button>
                      
                      {/* Admin-only cancel button */}
                      {user?.role === 'admin' && transaction.status === 'completed' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleCancelTransaction(transaction.id)
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm"
                        >
                          <TrashIcon className="w-4 h-4" />
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <DocumentTextIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions found</h3>
              <p className="text-gray-500">
                {user?.role === 'admin' 
                  ? 'No transactions available for your branch.' 
                  : 'No transactions found. Complete some sales to see them here.'}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <TransactionDetailModal 
          transaction={selectedTransaction} 
          onClose={() => setSelectedTransaction(null)} 
        />
      )}
    </div>
  )
}