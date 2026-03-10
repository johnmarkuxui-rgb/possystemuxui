'use client'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CommandPalette } from './CommandPalette'

export function Topbar() {
  return (
    <div className="neumorphic p-4 flex items-center justify-between">
      <CommandPalette />
      <button className="neumorphic-flat p-3 hover:neumorphic-pressed transition-all">
        <UserCircleIcon className="size-6 text-primary" />
      </button>
    </div>
  )
}