'use client'
import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const items = [
  { label: 'Go to Dashboard', href: '/' },
  { label: 'Open POS', href: '/pos' },
  { label: 'View Inventory', href: '/inventory' }
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const filtered = items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()))

  return (
    <>
      <button onClick={() => setOpen(true)} className="neumorphic-flat p-3 hover:neumorphic-pressed transition-all flex items-center gap-3">
        <MagnifyingGlassIcon className="size-5 text-secondary" />
        <span className="text-sm text-muted">Search CMD+K</span>
      </button>
      
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-28 bg-black/40" onClick={() => setOpen(false)}>
          <div className={cn('w-full max-w-xl neumorphic p-4')} onClick={e => e.stopPropagation()}>
            <input 
              value={q} 
              onChange={e => setQ(e.target.value)} 
              placeholder="Search" 
              className="w-full p-3 neumorphic-inset outline-none focus:ring-2 focus:ring-accent rounded-lg" 
            />
            <div className="mt-3 space-y-2">
              {filtered.map(i => (
                <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="block">
                  <div className="p-3 neumorphic-flat hover:neumorphic-pressed transition-all text-primary">{i.label}</div>
                </Link>
              ))}
              {filtered.length === 0 && <div className="p-3 text-secondary">No results</div>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}