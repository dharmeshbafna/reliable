'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Save, Eye, Upload, X, Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProductFormData {
  title: string
  slug: string
  description: string
  category: string
  image: string
  images: string[]
  features: string[]
  status: string
}

export default function NewProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [newImage, setNewImage] = useState('')
  const [newFeature, setNewFeature] = useState('')
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    slug: '',
    description: '',
    category: '',
    image: '',
    images: [],
    features: [],
    status: 'active'
  })

  const categories = ['home-automation', 'hotel-automation', 'office-automation', 'lighting-control', 'security-systems', 'climate-control']
  const statuses = ['active', 'inactive', 'draft']

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Auto-generate slug from title
    if (field === 'title') {
      setFormData(prev => ({ 
        ...prev, 
        slug: generateSlug(value) 
      }))
    }
  }

  const addImage = () => {
    if (newImage.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, newImage.trim()]
      }))
      setNewImage('')
    }
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }))
      setNewFeature('')
    }
  }

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/products')
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create product')
      }
    } catch (error) {
      console.error('Error creating product:', error)
      alert('Failed to create product')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/products">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Products
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Add New Product
                </h1>
                <p className="text-gray-400 mt-1">Create a new product for your catalog</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title" className="text-white">Product Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                    className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                    placeholder="Enter product title"
                  />
                </div>
                
                <div>
                  <Label htmlFor="slug" className="text-white">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    required
                    className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                    placeholder="product-url-slug"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  rows={4}
                  className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400 resize-none"
                  placeholder="Describe your product..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category" className="text-white">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="mt-2 bg-gray-900 border-white/10 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      <SelectItem value="home-automation" className="text-white hover:bg-purple-600/20">Home Automation</SelectItem>
                      <SelectItem value="hotel-automation" className="text-white hover:bg-purple-600/20">Hotel Automation</SelectItem>
                      <SelectItem value="office-automation" className="text-white hover:bg-purple-600/20">Office Automation</SelectItem>
                      <SelectItem value="lighting-control" className="text-white hover:bg-purple-600/20">Lighting Control</SelectItem>
                      <SelectItem value="security-systems" className="text-white hover:bg-purple-600/20">Security Systems</SelectItem>
                      <SelectItem value="climate-control" className="text-white hover:bg-purple-600/20">Climate Control</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status" className="text-white">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                    <SelectTrigger className="mt-2 bg-gray-900 border-white/10 text-white">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      {statuses.map(status => (
                        <SelectItem key={status} value={status} className="text-white hover:bg-purple-600/20">
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Product Images</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="image" className="text-white">Main Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label className="text-white">Additional Images</Label>
                <div className="mt-2 space-y-3">
                  <div className="flex gap-2">
                    <Input
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      className="flex-1 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                      placeholder="Add image URL"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                    />
                    <Button
                      type="button"
                      onClick={addImage}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {formData.images.length > 0 && (
                    <div className="space-y-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                          <img
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="w-16 h-16 rounded object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/api/placeholder/64/64'
                            }}
                          />
                          <span className="flex-1 text-sm text-gray-300 truncate">{image}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeImage(index)}
                            className="text-red-400 hover:bg-red-500/10"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">Product Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="flex-1 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                    placeholder="Add a feature"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                  />
                  <Button
                    type="button"
                    onClick={addFeature}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                {formData.features.length > 0 && (
                  <div className="space-y-2">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                        <span className="flex-1 text-gray-300">{feature}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFeature(index)}
                          className="text-red-400 hover:bg-red-500/10"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link href="/admin/products">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Cancel
              </Button>
            </Link>
            
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              {loading ? 'Creating...' : 'Create Product'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}