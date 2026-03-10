'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '@/store/useAuthStore'
import { useUserStore } from '@/store/useUserStore'
import { 
  BuildingStorefrontIcon,
  UserIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

// Default tenant for testing - in real app, this would be dynamic
const DEFAULT_TENANT = 'default-tenant'

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()
  const { findUserByCredentials, getUsersByTenant } = useUserStore()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shakeError, setShakeError] = useState(false)
  
  // Get available users for the current tenant
  const availableUsers = getUsersByTenant(DEFAULT_TENANT)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setShakeError(false)
    
    if (!username || !password) {
      setError('Please enter both username and password')
      setShakeError(true)
      setTimeout(() => setShakeError(false), 500)
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const user = findUserByCredentials(username, password, DEFAULT_TENANT)

      if (user) {
        setUser(user)
        router.push('/')
      } else {
        setError('Invalid credentials. Please check your username and password.')
        setShakeError(true)
        setTimeout(() => setShakeError(false), 500)
      }
      
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900/40 to-purple-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      {/* Dark Overlay with Heavy Blur */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl mb-6 ring-1 ring-blue-400/30 shadow-2xl shadow-blue-500/10"
          >
            <BuildingStorefrontIcon className="w-10 h-10 text-blue-300" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-3">Enterprise POS</h1>
          <p className="text-slate-300 text-lg">Branch Access Management System</p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={shakeError ? { opacity: 1, scale: 1, x: [-10, 10, -10, 10, 0] } : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={`bg-slate-800/40 backdrop-blur-2xl rounded-2xl p-8 ring-1 ring-white/10 shadow-2xl ${shakeError ? 'animate-shake' : ''}`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">Branch Access</h2>
            <p className="text-slate-400 text-sm">Enter your credentials to access your terminal</p>
          </div>

          {/* Premium Error Toast */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute -top-16 left-0 right-0 mx-auto w-full max-w-sm"
              >
                <div className="p-4 bg-red-500/90 backdrop-blur-xl border border-red-400/50 rounded-xl shadow-2xl flex items-center gap-3">
                  <ExclamationCircleIcon className="w-5 h-5 text-white shrink-0" />
                  <span className="text-white text-sm font-medium">{error}</span>
                  <button
                    onClick={() => setError('')}
                    className="ml-auto text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400/60" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-inner"
                  placeholder="Enter your username"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400/60" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-inner"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full p-4 bg-linear-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-500 hover:via-blue-600 hover:to-blue-500 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 backdrop-blur-sm border border-blue-400/30 shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  <span>Access Terminal</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Quick Access Info */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-slate-400 text-xs mb-3 font-medium">Branch Access Credentials</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {availableUsers.map((user) => (
                  <div key={user.id} className="p-3 bg-slate-800/50 rounded-lg border border-slate-600/30 backdrop-blur-sm">
                    <div className="text-slate-400 mb-1">
                      {user.role === 'admin' ? 'Manager' : 'Cashier'} Terminal
                    </div>
                    <div className="text-blue-300 font-mono text-xs">
                      {user.username}/{user.password}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}