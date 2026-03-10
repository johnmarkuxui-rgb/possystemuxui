'use client'
import { PlusIcon } from '@heroicons/react/24/outline'

interface AddProductButtonProps {
  onClick: () => void
}

export function AddProductButton({ onClick }: AddProductButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
    >
      <PlusIcon className="size-4" />
      Add Product
    </button>
  )
}