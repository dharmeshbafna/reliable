'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'

interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price?: number
  image?: string
  status: string
}

export default function SimpleProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      console.log('Products data:', data) // Debug log
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div>Loading products...</div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of smart home automation solutions
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-400">Check the database connection or add some products</p>
            <div className="mt-4">
              <Link href="/admin" className="text-blue-400 hover:text-blue-300">
                Go to Admin Panel →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <div className="text-sm text-blue-400 mb-2">{product.category}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  {product.price && (
                    <span className="text-2xl font-bold text-blue-400">
                      ${product.price}
                    </span>
                  )}
                  
                  <Link 
                    href={`/product/${product.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}