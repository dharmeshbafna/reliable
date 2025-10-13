'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price?: number
  image?: string
  status: string
  createdAt: string
  _count: {
    inquiries: number
  }
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, statusFilter])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      
      // Add inquiry count for each product
      const productsWithCount = await Promise.all(
        data.map(async (product: any) => {
          const inquiriesResponse = await fetch(`/api/inquiries?productId=${product.id}`)
          const inquiries = await inquiriesResponse.json()
          return {
            ...product,
            _count: {
              inquiries: inquiries.length
            }
          }
        })
      )
      
      setProducts(productsWithCount)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    if (statusFilter !== 'all') {
      filtered = filtered.filter(product => product.status === statusFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }

  const handleDelete = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setProducts(products.filter(p => p.id !== productId))
      } else {
        alert('Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete product')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-600/20 text-green-400 border-green-500/30'
      case 'inactive':
        return 'bg-red-600/20 text-red-400 border-red-500/30'
      case 'draft':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30'
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-500/30'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Manage Products
            </h1>
            <p className="text-gray-400 mt-1">Add, edit, and manage your product catalog</p>
          </div>
          
          <Link href="/admin/products/new">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-gray-900 border-white/10 text-white w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-white/10">
                <SelectItem value="all" className="text-white hover:bg-purple-600/20">
                  All Status
                </SelectItem>
                <SelectItem value="active" className="text-white hover:bg-purple-600/20">
                  Active
                </SelectItem>
                <SelectItem value="inactive" className="text-white hover:bg-purple-600/20">
                  Inactive
                </SelectItem>
                <SelectItem value="draft" className="text-white hover:bg-purple-600/20">
                  Draft
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-semibold text-gray-300">Product</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Category</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Price</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Status</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Inquiries</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-white/50">
                              {product.title.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <div className="font-semibold">{product.title}</div>
                          <div className="text-sm text-gray-400">{product.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="border-white/20 text-white">
                        {product.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {product.price ? `$${product.price}` : '-'}
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(product.status)}>
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-purple-400 font-semibold">
                        {product._count.inquiries}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Link href={`/product/${product.slug}`} target="_blank">
                          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        
                        <Link href={`/admin/products/${product.id}/edit`}>
                          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(product.id)}
                          className="text-gray-300 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-400 mb-4">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your filters' 
                    : 'Get started by adding your first product'
                  }
                </p>
                {(!searchTerm && statusFilter === 'all') && (
                  <Link href="/admin/products/new">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Product
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}