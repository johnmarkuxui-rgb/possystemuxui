'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
