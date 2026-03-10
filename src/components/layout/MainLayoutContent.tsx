'use client'
import { usePathname } from 'next/navigation'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { TransitionProvider } from '@/components/providers/TransitionProvider'

interface MainLayoutContentProps {
  children: React.ReactNode
}

export function MainLayoutContent({ children }: MainLayoutContentProps) {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith('/auth')

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-primary">
        <TransitionProvider>{children}</TransitionProvider>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <TransitionProvider>{children}</TransitionProvider>
          </div>
        </div>
      </div>
    </div>
  )
}