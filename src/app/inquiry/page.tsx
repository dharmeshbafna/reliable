'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, Check } from 'lucide-react'
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
import { PageLayout } from '@/components/PageLayout'

interface Product {
  id: string
  title: string
  slug: string
}

interface InquiryForm {
  name: string
  email: string
  phone: string
  company: string
  productId: string
  message: string
}

export default function InquiryPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productId: '',
    message: ''
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?status=active')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleInputChange = (field: keyof InquiryForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productId: '',
          message: ''
        })
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to submit inquiry')
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('Failed to submit inquiry')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Inquiry Submitted!
            </h1>
            <p className="text-gray-300 mb-8">
              Thank you for your inquiry. We'll get back to you within 24 hours.
            </p>
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Make an Inquiry
            </h1>
            <p className="text-xl text-gray-400">
              Get in touch with us about your project needs
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">hello@phunk.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+44 123 456 789</p>
                  </div>
                </div>

                <div className="p-4 bg-purple-600/10 border border-purple-500/30 rounded-lg">
                  <h3 className="font-semibold mb-2 text-purple-400">Response Time</h3>
                  <p className="text-sm text-gray-300">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                        placeholder="+44 123 456 789"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="product" className="text-white">Product of Interest</Label>
                    <Select value={formData.productId} onValueChange={(value) => handleInputChange('productId', value)}>
                      <SelectTrigger className="mt-2 bg-gray-900 border-white/10 text-white">
                        <SelectValue placeholder="Select a product (optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/10">
                        <SelectItem value="" className="text-white hover:bg-purple-600/20">
                          General inquiry
                        </SelectItem>
                        {products.map(product => (
                          <SelectItem key={product.id} value={product.id} className="text-white hover:bg-purple-600/20">
                            {product.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="mt-2 bg-gray-900 border-white/10 text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-full transition-all transform hover:scale-105"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {loading ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}