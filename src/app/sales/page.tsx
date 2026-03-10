'use client'
import { useState, useEffect, useMemo } from 'react'
import { useSalesStore } from '@/store/useSalesStore'
import { useAuthStore } from '@/store/useAuthStore'
import { formatPHP } from '@/lib/currency'
import { 
  BanknotesIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon, 
  CalculatorIcon, 
  ChartBarIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function SalesReportPage() {
  const { getSalesMetrics } = useSalesStore()
  const { user, getCurrentTenant, isAdmin, isStaff } = useAuthStore()
  const [activePeriod, setActivePeriod] = useState('Today')
  const [isLoading, setIsLoading] = useState(true)
  
  const currentTenant = getCurrentTenant()

  // Get metrics based on user role (RBAC)
  const metrics = useMemo(() => {
    if (!user) return null
    return getSalesMetrics(user.id, user.role, user.tenantId)
  }, [user, getSalesMetrics])

  // Calculate profit margin (admin only)
  const profitMargin = useMemo(() => {
    if (!isAdmin() || !metrics) return 0
    return metrics.grossSales > 0 ? (metrics.netProfit / metrics.grossSales) * 100 : 0
  }, [metrics, isAdmin])

  const periods = ['Today', 'Week', 'Month', 'Year']

  const formatCurrency = (amount: number) => {
    return formatPHP(amount)
  }

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          {isStaff() ? 'My Sales Report' : 'Sales Report'}
        </h1>
        <div className="text-sm text-gray-500">
          {metrics?.totalTransactions || 0} transactions • {currentTenant}
        </div>
      </div>

      {/* Period Selector */}
      <div className="flex gap-2">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setActivePeriod(period)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activePeriod === period
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Enhanced Summary Cards with Profit Tracking */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Gross Sales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BanknotesIcon className="size-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">
                  {isStaff() ? 'My Sales' : 'Gross Sales'}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(metrics?.grossSales || 0)}
                </div>
              </div>
            </div>
            <ArrowTrendingUpIcon className="size-5 text-green-500" />
          </div>
        </motion.div>

        {/* Total Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <ShoppingBagIcon className="size-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Orders</div>
                <div className="text-2xl font-bold text-gray-900">
                  {metrics?.totalTransactions || 0}
                </div>
              </div>
            </div>
            <ArrowTrendingUpIcon className="size-5 text-green-500" />
          </div>
        </motion.div>

        {/* Items Sold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <DocumentTextIcon className="size-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Items Sold</div>
                <div className="text-2xl font-bold text-gray-900">
                  {metrics?.totalItems || 0}
                </div>
              </div>
            </div>
            <ArrowTrendingUpIcon className="size-5 text-green-500" />
          </div>
        </motion.div>

        {/* Admin-only Net Profit */}
        {isAdmin() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <ChartBarIcon className="size-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Net Profit</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(metrics?.netProfit || 0)}
                  </div>
                </div>
              </div>
              <ArrowTrendingUpIcon className="size-5 text-green-500" />
            </div>
          </motion.div>
        )}

        {/* Staff-specific Average Order Value */}
        {isStaff() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <CalculatorIcon className="size-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Avg Order Value</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(metrics?.averageOrderValue || 0)}
                  </div>
                </div>
              </div>
              <ArrowTrendingUpIcon className="size-5 text-green-500" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Profit Analysis Section - Admin Only */}
      {isAdmin() && metrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Profit Analysis</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {formatCurrency(metrics.grossSales)}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Sales Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {formatCurrency(metrics.grossSales - metrics.netProfit)}
              </div>
              <div className="text-sm text-gray-600 mt-1">Cost of Goods Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {formatCurrency(metrics.netProfit)}
              </div>
              <div className="text-sm text-gray-600 mt-1">Net Profit</div>
            </div>
          </div>
          
          {/* Profit Margin Visualization */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Profit Margin</span>
              <span>{profitMargin.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-linear-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(profitMargin, 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Performance Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Summary</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {metrics?.completedTransactions || 0}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {isStaff() ? 'Your Completed Sales' : 'Completed Transactions'}
            </div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {metrics?.cancelledTransactions || 0}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {isStaff() ? 'Your Cancelled Sales' : 'Cancelled Transactions'}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}