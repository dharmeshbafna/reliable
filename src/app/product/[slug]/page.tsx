'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, Share2, Heart, Star, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PageLayout } from '@/components/PageLayout'

interface Product {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price?: number
  image?: string
  images?: string
  features?: string
  status: string
  createdAt: string
  updatedAt: string
}

interface InquiryForm {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [inquiryForm, setInquiryForm] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [submittingInquiry, setSubmittingInquiry] = useState(false)

  useEffect(() => {
    if (params.slug) {
      fetchProduct(params.slug as string)
    }
  }, [params.slug])

  const fetchProduct = async (slug: string) => {
    try {
      const response = await fetch(`/api/products/${slug}`)
      if (response.ok) {
        const data = await response.json()
        setProduct(data)
      } else {
        router.push('/products')
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      router.push('/products')
    } finally {
      setLoading(false)
    }
  }

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittingInquiry(true)

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inquiryForm,
          productId: product?.id
        }),
      })

      if (response.ok) {
        alert('Inquiry submitted successfully! We will contact you soon.')
        setInquiryForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        setShowInquiryForm(false)
      } else {
        alert('Failed to submit inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('Failed to submit inquiry. Please try again.')
    } finally {
      setSubmittingInquiry(false)
    }
  }

  const parseJSON = (jsonString: string | null | undefined) => {
    if (!jsonString) return []
    try {
      return JSON.parse(jsonString)
    } catch {
      return []
    }
  }

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </PageLayout>
    )
  }

  if (!product) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link href="/products" className="text-purple-400 hover:text-purple-300">
              Back to Products
            </Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  const images = parseJSON(product.images)
  const features = parseJSON(product.features)
  const allImages = product.image ? [product.image, ...images] : images

  return (
    <PageLayout>
      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10">
              {allImages.length > 0 ? (
                <img
                  src={allImages[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-white/10">{product.title.charAt(0)}</div>
                </div>
              )}
            </div>
            
            {allImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? 'border-purple-500' : 'border-white/10'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-500/30">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.price && (
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-purple-400">${product.price}</span>
                <span className="text-gray-400">per project</span>
              </div>
            )}

            {/* Features */}
            {features.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowInquiryForm(true)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-full transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Make Inquiry
              </Button>
              
              <Button
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10 font-semibold py-4 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Category:</span>
                  <span className="ml-2 text-white">{product.category}</span>
                </div>
                <div>
                  <span className="text-gray-400">Status:</span>
                  <span className="ml-2 text-green-400">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showInquiryForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowInquiryForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6">Make an Inquiry</h2>
            
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={inquiryForm.phone}
                  onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  placeholder="+44 123 456 789"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  value={inquiryForm.company}
                  onChange={(e) => setInquiryForm({...inquiryForm, company: e.target.value})}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                  className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={submittingInquiry}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full"
                >
                  {submittingInquiry ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowInquiryForm(false)}
                  className="flex-1 border-white/20 text-white hover:bg-white/10 font-semibold py-3 rounded-full"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </PageLayout>
  )
}