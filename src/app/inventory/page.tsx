import { InventoryTable } from '@/components/inventory/InventoryTable'

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
      </div>
      <InventoryTable />
    </div>
  )
}