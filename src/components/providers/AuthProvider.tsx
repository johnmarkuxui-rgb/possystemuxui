'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    // Allow access to login page without authentication
    if (pathname === '/auth/login') {
      return
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, pathname, router])

  // Don't render protected content if not authenticated (except login page)
  if (!isAuthenticated && pathname !== '/auth/login') {
    return null
  }

  return <>{children}</>
}