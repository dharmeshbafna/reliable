'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ArrowRight, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [loading, setLoading] = useState(true)

  const categories = ['all', 'Design', 'Development', 'Consulting', 'Marketing']

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, selectedCategory])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative solutions designed to transform your business
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
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
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-900 border-white/10 text-white w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/10">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-purple-600/20">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-purple-600 hover:bg-purple-700' : 'border-white/20 text-white hover:bg-white/10'}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-purple-600 hover:bg-purple-700' : 'border-white/20 text-white hover:bg-white/10'}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : 
            "space-y-6"
          }>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={viewMode === 'grid' ? 
                  "group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all" :
                  "group relative bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                }
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/20">{product.title.charAt(0)}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-purple-400 mb-2">{product.category}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        {product.price && (
                          <span className="text-2xl font-bold text-purple-400">
                            ${product.price}
                          </span>
                        )}
                        
                        <Link 
                          href={`/product/${product.slug}`}
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 aspect-video lg:aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/20">{product.title.charAt(0)}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div className="text-sm text-purple-400">{product.category}</div>
                        {product.price && (
                          <span className="text-2xl font-bold text-purple-400">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 mb-6">{product.description}</p>
                      
                      <Link 
                        href={`/product/${product.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}