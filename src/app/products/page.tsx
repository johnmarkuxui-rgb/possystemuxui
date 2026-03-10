'use client'
import { useState } from 'react'
import { useProductStore } from '@/store/useProductStore'
import { AddProductModal } from '@/components/products/AddProductModal'
import { DeleteConfirmModal } from '@/components/products/DeleteConfirmModal'
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function ProductsPage() {
  const { products, deleteProduct } = useProductStore()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product)
    setIsEditModalOpen(true)
  }

  const handleDeleteProduct = (product: any) => {
    setSelectedProduct(product)
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      deleteProduct(selectedProduct.id)
    }
  }

  const handleCloseEdit = () => {
    setIsEditModalOpen(false)
    setSelectedProduct(null)
  }

  const handleCloseDelete = () => {
    setIsDeleteModalOpen(false)
    setSelectedProduct(null)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', { 
      style: 'currency', 
      currency: 'PHP' 
    }).format(amount)
  }

  const AddProductButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold"
    >
      <PlusIcon className="size-5" />
      Add Product
    </button>
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
        <AddProductButton onClick={() => setIsAddModalOpen(true)} />
      </div>

      {products.length > 0 ? (
        <div className="grid gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between hover:shadow-sm transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="bg-gray-50 px-3 py-1 rounded-lg">
                      {product.stock} {product.unit} available
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(product.price)}
                  </div>
                  {product.costPrice && (
                    <div className="text-sm text-gray-500">
                      Cost: {formatCurrency(product.costPrice)}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <PencilIcon className="size-5" />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product)}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <TrashIcon className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No products available</div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <PlusIcon className="size-5" />
            Add Your First Product
          </button>
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Edit Product Modal */}
      <AddProductModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEdit}
        product={selectedProduct || undefined}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        productName={selectedProduct?.name || ''}
      />
    </div>
  )
}