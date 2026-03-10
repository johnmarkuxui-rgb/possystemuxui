'use client'
import { useState, useEffect, useMemo } from 'react'
import { 
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { useSalesStore } from '@/store/useSalesStore'
import { useProductStore } from '@/store/useProductStore'
import { useAuthStore } from '@/store/useAuthStore'
import { formatPHP } from '@/lib/currency'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const { getSalesMetrics } = useSalesStore()
  const { products } = useProductStore()
  const { user, getCurrentTenant, isAdmin, isStaff } = useAuthStore()
  const [activePeriod, setActivePeriod] = useState('Today')
  const [isLoading, setIsLoading] = useState(true)
  
  const currentTenant = getCurrentTenant()

  // Get metrics based on user role (RBAC)
  const metrics = useMemo(() => {
    if (!user) return null
    return getSalesMetrics(user.id, user.role, user.tenantId)
  }, [user, getSalesMetrics])

  // Calculate low stock items (filtered by tenant)
  const lowStockCount = useMemo(() => {
    const tenantProducts = currentTenant ? products.filter(p => p.tenantId === currentTenant) : products
    return tenantProducts.filter(product => 
      product.lowStockAlert && product.stock <= product.lowStockAlert && product.stock > 0
    ).length
  }, [products, currentTenant])

  // Calculate profit margin (admin only)
  const profitMargin = useMemo(() => {
    if (!isAdmin() || !metrics) return 0
    return metrics.grossSales > 0 ? (metrics.netProfit / metrics.grossSales) * 100 : 0
  }, [metrics, isAdmin])

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const formatCurrency = (amount: number) => {
    return formatPHP(amount)
  }

  const periods = ['Today', 'Week', 'Month', 'Year']

  // Define stats based on user role (RBAC)
  const stats = useMemo(() => {
    if (!metrics) return []
    
    const baseStats = [
      {
        title: isStaff() ? 'My Sales' : 'Total Revenue',
        amount: formatCurrency(metrics.grossSales),
        change: metrics.grossSales > 0 ? '+' : '',
        icon: CurrencyDollarIcon,
        iconColor: 'bg-emerald-100 text-emerald-600',
        trend: (lowStockCount > 0 ? 'down' : 'up') as 'up' | 'down'
      },
      {
        title: 'Total Orders',
        amount: metrics.totalTransactions.toString(),
        change: metrics.totalTransactions > 0 ? '+' : '',
        icon: ShoppingBagIcon,
        iconColor: 'bg-blue-100 text-blue-600',
        trend: 'up' as const
      },
      {
        title: 'Items Sold',
        amount: metrics.totalItems.toString(),
        change: metrics.totalItems > 0 ? '+' : '',
        icon: DocumentTextIcon,
        iconColor: 'bg-purple-100 text-purple-600',
        trend: 'up' as const
      }
    ]

    // Admin-only stats
    if (isAdmin()) {
      baseStats.push({
        title: 'Net Profit',
        amount: formatCurrency(metrics.netProfit),
        change: metrics.netProfit > 0 ? '+' : '',
        icon: ChartBarIcon,
        iconColor: 'bg-green-100 text-green-600',
        trend: 'up' as const
      })
    }

    // Low stock alerts for all users
    baseStats.push({
      title: 'Low Stock Alerts',
      amount: lowStockCount.toString(),
      change: lowStockCount > 0 ? '⚠️' : '✓',
      icon: ExclamationTriangleIcon,
      iconColor: lowStockCount > 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
      trend: lowStockCount > 0 ? 'down' as const : 'up' as const
    })

    return baseStats
  }, [metrics, lowStockCount, isAdmin, isStaff])

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
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
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.iconColor}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Admin-only Profit Margin */}
      {isAdmin() && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profit Margin Analysis</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Current Profit Margin</p>
              <p className="text-3xl font-bold text-green-600">{profitMargin.toFixed(1)}%</p>
            </div>
            <div className="flex-1 mx-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-linear-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(profitMargin, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {metrics && metrics.completedTransactions > 0 ? (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-full">
                <ShoppingBagIcon className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {metrics.completedTransactions} transactions completed
                </p>
                <p className="text-sm text-gray-500">
                  {isStaff() ? 'Your recent sales activity' : 'Branch sales activity'}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <ShoppingBagIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No recent activity</p>
              <p className="text-sm">Start processing sales to see activity here</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}