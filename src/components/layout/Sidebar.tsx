'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon,
  ShoppingCartIcon,
  CubeIcon,
  CreditCardIcon,
  Bars3Icon,
  PlusCircleIcon,
  ChartBarIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  UserGroupIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'next/navigation'
import { SettingsModal } from '@/components/SettingsModal'

const nav = [
  { href: '/', label: 'Dashboard', icon: HomeIcon },
  { href: '/pos', label: 'POS', icon: ShoppingCartIcon },
  { href: '/products', label: 'Products', icon: PlusCircleIcon },
  { href: '/inventory', label: 'Inventory', icon: CubeIcon },
  { href: '/sales', label: 'Sales', icon: ChartBarIcon },
  { href: '/checkout', label: 'Transactions', icon: CreditCardIcon }
]

const adminNav = [
  { href: '/admin/users', label: 'Users', icon: UserGroupIcon }
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuthStore()
  
  return (
    <div className="h-full relative">
      {/* Spacer for collapsed state */}
      <motion.div 
        className="h-full bg-white border-r border-gray-200"
        initial={false}
        animate={{ width: isOpen ? 256 : 80 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />
      
      {/* Main Sidebar Content */}
      <motion.div
        className="h-full absolute inset-y-0 left-0"
        initial={false}
        animate={{ 
          x: isOpen ? 0 : -176
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        <div className="p-6 h-full flex flex-col bg-white border-r border-gray-200 w-64">
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-8">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-semibold text-gray-900 text-lg"
              >
                POS System
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1 space-y-2">
          {nav.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            
            return (
              <Link key={href} href={href}>
                <motion.div
                  className={cn(
                    'flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-colors',
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50',
                    isOpen ? 'justify-start' : 'justify-center'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="size-5 shrink-0" />
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="font-medium whitespace-nowrap"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            )
          })}
        </nav>
        
        {/* Admin Navigation - Only show for admin users */}
        {user?.role === 'admin' && (
          <div className="mt-6">
            <div className="px-4 mb-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </h3>
            </div>
            <nav className="space-y-2">
              {adminNav.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href
                
                return (
                  <Link key={href} href={href}>
                    <motion.div
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-colors',
                        isActive 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-gray-50',
                        isOpen ? 'justify-start' : 'justify-center'
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="size-5 shrink-0" />
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="font-medium whitespace-nowrap"
                          >
                            {label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
        
        {/* User Info & Logout */}
        {isAuthenticated && (
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center gap-3 p-3 mb-2 bg-gray-50 rounded-lg">
              <UserCircleIcon className="size-8 text-gray-600" />
              {isOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role} • {user?.tenantId}</p>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <motion.button
                onClick={() => setShowSettings(true)}
                className="w-full flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Cog6ToothIcon className="size-5 shrink-0" />
                {isOpen && <span className="font-medium">Settings</span>}
              </motion.button>
              
              <motion.button
                onClick={() => {
                  logout()
                  router.push('/auth/login')
                }}
                className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRightOnRectangleIcon className="size-5 shrink-0" />
                {isOpen && <span className="font-medium">Logout</span>}
              </motion.button>
            </div>
          </div>
        )}
        
        {/* Settings Modal */}
        <SettingsModal 
          isOpen={showSettings} 
          onClose={() => setShowSettings(false)} 
        />
      </div>
    </motion.div>
      
      {/* Sidebar Toggle Button - Fixed Position */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-6 -right-3 p-2 bg-white border border-gray-200 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 0 : 180 
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        <Bars3Icon className="w-4 h-4 text-gray-700" />
      </motion.button>
    </div>
  )
}