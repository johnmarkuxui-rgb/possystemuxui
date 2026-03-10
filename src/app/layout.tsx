import './globals.css'
import type { Metadata } from 'next'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { MainLayoutContent } from '@/components/layout/MainLayoutContent'

export const metadata: Metadata = {
  title: 'SaaS POS',
  description: 'Modern web POS'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary">
        <QueryProvider>
          <AuthProvider>
            <MainLayoutContent>{children}</MainLayoutContent>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}