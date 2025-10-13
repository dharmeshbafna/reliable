'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, BarChart3, Users, MessageSquare, TrendingUp, Package, Eye } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Stats {
  totalProducts: number
  totalInquiries: number
  newInquiries: number
  activeProducts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    totalInquiries: 0,
    newInquiries: 0,
    activeProducts: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch products
      const productsResponse = await fetch('/api/products')
      const products = await productsResponse.json()
      
      // Fetch inquiries
      const inquiriesResponse = await fetch('/api/inquiries')
      const inquiries = await inquiriesResponse.json()

      setStats({
        totalProducts: products.length,
        totalInquiries: inquiries.length,
        newInquiries: inquiries.filter((i: any) => i.status === 'new').length,
        activeProducts: products.filter((p: any) => p.status === 'active').length
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-gray-400 mt-1">Monitor your business metrics and performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Products</p>
                  <p className="text-3xl font-bold mt-2">{stats.totalProducts}</p>
                </div>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Products</p>
                  <p className="text-3xl font-bold mt-2">{stats.activeProducts}</p>
                </div>
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Inquiries</p>
                  <p className="text-3xl font-bold mt-2">{stats.totalInquiries}</p>
                </div>
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">New Inquiries</p>
                  <p className="text-3xl font-bold mt-2 text-orange-400">{stats.newInquiries}</p>
                </div>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                Products Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/admin/products">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Products
                </Button>
              </Link>
              
              <Link href="/admin/products/new">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </Link>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Active Products</span>
                  <span className="text-green-400 font-semibold">{stats.activeProducts}/{stats.totalProducts}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.totalProducts > 0 ? (stats.activeProducts / stats.totalProducts) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                Customer Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/admin/inquiries">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View All Inquiries
                </Button>
              </Link>
              
              {stats.newInquiries > 0 && (
                <div className="text-center p-4 bg-orange-600/20 border border-orange-500/30 rounded-lg">
                  <p className="text-orange-400 font-semibold">
                    {stats.newInquiries} new {stats.newInquiries === 1 ? 'inquiry' : 'inquiries'} to review
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">New Inquiries</span>
                  <span className="text-orange-400 font-semibold">{stats.newInquiries}</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-gray-400">Total Inquiries</span>
                  <span className="text-blue-400 font-semibold">{stats.totalInquiries}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6"
      >
        <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {stats.totalProducts > 0 ? Math.round((stats.activeProducts / stats.totalProducts) * 100) : 0}%
                </div>
                <div className="text-sm text-gray-400">Product Activation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {stats.totalInquiries > 0 ? Math.round((stats.newInquiries / stats.totalInquiries) * 100) : 0}%
                </div>
                <div className="text-sm text-gray-400">New Inquiry Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {stats.totalProducts > 0 ? (stats.totalInquiries / stats.totalProducts).toFixed(1) : '0.0'}
                </div>
                <div className="text-sm text-gray-400">Inquiries per Product</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}