'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Save, Eye, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price?: number
  image?: string
  status: string
  features?: string[]
}

export default function EditProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category: '',
    image: '',
    status: 'active',
    features: ''
  })

  useEffect(() => {
    fetchProduct()
  }, [productId])

  const fetchProduct = async () => {
    try {
      console.log('Fetching product with ID:', productId)
      const response = await fetch(`/api/products/${productId}`)
      console.log('Fetch response status:', response.status)
      
      if (response.ok) {
        const data = await response.json()
        console.log('Product data received:', data)
        setProduct(data)
        setFormData({
          title: data.title || '',
          slug: data.slug || '',
          description: data.description || '',
          category: data.category || '',
          image: data.image || '',
          status: data.status || 'active',
          features: data.features ? (Array.isArray(data.features) ? data.features.join(', ') : data.features) : ''
        })
      } else {
        const errorData = await response.json()
        console.error('Product not found:', errorData)
        router.push('/admin/products')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      router.push('/admin/products')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSaving(true)

    try {
      const productData = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        category: formData.category,
        image: formData.image || undefined,
        status: formData.status,
        features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f) : []
      }

      console.log('Submitting product data:', productData)

      const response = await fetch(`/api/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (response.ok) {
        const updatedProduct = await response.json()
        console.log('Product updated successfully:', updatedProduct)
        
        // Show success message
        alert('Product updated successfully!')
        
        // Wait a moment before redirecting
        setTimeout(() => {
          router.push('/admin/products')
        }, 500)
      } else {
        const errorData = await response.json()
        console.error('Error response:', errorData)
        const errorMessage = errorData.error || errorData.details || 'Unknown error'
        alert(`Failed to update product: ${errorMessage}`)
      }
    } catch (error) {
      console.error('Error updating product:', error)
      alert('Failed to update product. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        router.push('/admin/products')
      } else {
        alert('Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Failed to delete product')
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link href="/admin/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/products">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Edit Product
              </h1>
              <p className="text-gray-400 mt-1">Modify product information</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            {product.slug && (
              <Link href={`/product/${product.slug}`} target="_blank">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Eye className="w-4 h-4 mr-2" />
                  View Product
                </Button>
              </Link>
            )}
            
            <Button
              variant="outline"
              onClick={handleDelete}
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Product Title *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter product title"
                    className="bg-gray-800 border-white/10 text-white placeholder-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Slug *</label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="product-url-slug"
                    className="bg-gray-800 border-white/10 text-white placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Description *</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter product description"
                  rows={4}
                  className="bg-gray-800 border-white/10 text-white placeholder-gray-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Category *</label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/10">
                      <SelectItem value="home-automation" className="text-white">Home Automation</SelectItem>
                      <SelectItem value="hotel-automation" className="text-white">Hotel Automation</SelectItem>
                      <SelectItem value="office-automation" className="text-white">Office Automation</SelectItem>
                      <SelectItem value="lighting-control" className="text-white">Lighting Control</SelectItem>
                      <SelectItem value="security-systems" className="text-white">Security Systems</SelectItem>
                      <SelectItem value="climate-control" className="text-white">Climate Control</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Status</label>
                  <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                    <SelectTrigger className="bg-gray-800 border-white/10 text-white">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/10">
                      <SelectItem value="active" className="text-white">Active</SelectItem>
                      <SelectItem value="inactive" className="text-white">Inactive</SelectItem>
                      <SelectItem value="draft" className="text-white">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Image URL</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                  className="bg-gray-800 border-white/10 text-white placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Features (comma-separated)</label>
                <Textarea
                  value={formData.features}
                  onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                  placeholder="Feature 1, Feature 2, Feature 3"
                  rows={3}
                  className="bg-gray-800 border-white/10 text-white placeholder-gray-500"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {saving ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </div>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>

                <Link href="/admin/products">
                  <Button type="button" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}