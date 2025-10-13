'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Building, User, Calendar, Search, Filter, Eye, Check, X } from 'lucide-react'
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Inquiry {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  status: string
  createdAt: string
  product?: {
    title: string
    slug: string
  }
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInquiries()
  }, [])

  useEffect(() => {
    filterInquiries()
  }, [inquiries, searchTerm, statusFilter])

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries')
      const data = await response.json()
      setInquiries(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching inquiries:', error)
      setLoading(false)
    }
  }

  const filterInquiries = () => {
    let filtered = inquiries

    if (statusFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.status === statusFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(inquiry =>
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredInquiries(filtered)
  }

  const updateInquiryStatus = async (inquiryId: string, status: string) => {
    try {
      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setInquiries(inquiries.map(inquiry =>
          inquiry.id === inquiryId ? { ...inquiry, status } : inquiry
        ))
      } else {
        alert('Failed to update inquiry status')
      }
    } catch (error) {
      console.error('Error updating inquiry:', error)
      alert('Failed to update inquiry status')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-orange-600/20 text-orange-400 border-orange-500/30'
      case 'read':
        return 'bg-blue-600/20 text-blue-400 border-blue-500/30'
      case 'replied':
        return 'bg-green-600/20 text-green-400 border-green-500/30'
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-500/30'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Manage Inquiries
              </h1>
              <p className="text-gray-400 mt-1">View and respond to customer inquiries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search inquiries..."
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
                <SelectItem value="new" className="text-white hover:bg-purple-600/20">
                  New
                </SelectItem>
                <SelectItem value="read" className="text-white hover:bg-purple-600/20">
                  Read
                </SelectItem>
                <SelectItem value="replied" className="text-white hover:bg-purple-600/20">
                  Replied
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="pb-4">
        <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 font-semibold text-gray-300">Customer</th>
                    <th className="text-left p-4 font-semibold text-gray-300">Contact</th>
                    <th className="text-left p-4 font-semibold text-gray-300">Product</th>
                    <th className="text-left p-4 font-semibold text-gray-300">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-300">Date</th>
                    <th className="text-left p-4 font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry, index) => (
                    <motion.tr
                      key={inquiry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4">
                        <div>
                          <div className="font-semibold">{inquiry.name}</div>
                          {inquiry.company && (
                            <div className="text-sm text-gray-400">{inquiry.company}</div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-300">{inquiry.email}</span>
                          </div>
                          {inquiry.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <span className="text-gray-300">{inquiry.phone}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        {inquiry.product ? (
                          <div>
                            <div className="font-medium">{inquiry.product.title}</div>
                            <div className="text-sm text-gray-400">{inquiry.product.slug}</div>
                          </div>
                        ) : (
                          <span className="text-gray-400">General inquiry</span>
                        )}
                      </td>
                      <td className="p-4">
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          {formatDate(inquiry.createdAt)}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedInquiry(inquiry)}
                            className="text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          
                          {inquiry.status !== 'read' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateInquiryStatus(inquiry.id, 'read')}
                              className="text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                          )}
                          
                          {inquiry.status !== 'replied' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateInquiryStatus(inquiry.id, 'replied')}
                              className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 border border-transparent hover:border-green-500/20"
                            >
                              <Mail className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              
              {filteredInquiries.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📧</div>
                  <h3 className="text-xl font-semibold mb-2">No inquiries found</h3>
                  <p className="text-gray-400">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your filters' 
                      : 'No customer inquiries yet'
                    }
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inquiry Detail Modal */}
      <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <DialogContent className="bg-gray-900 border-white/10 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Inquiry Details</DialogTitle>
          </DialogHeader>
          
          {selectedInquiry && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Name</label>
                  <div className="font-semibold">{selectedInquiry.name}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <div className="font-semibold">{selectedInquiry.email}</div>
                </div>
                {selectedInquiry.phone && (
                  <div>
                    <label className="text-sm text-gray-400">Phone</label>
                    <div className="font-semibold">{selectedInquiry.phone}</div>
                  </div>
                )}
                {selectedInquiry.company && (
                  <div>
                    <label className="text-sm text-gray-400">Company</label>
                    <div className="font-semibold">{selectedInquiry.company}</div>
                  </div>
                )}
              </div>

              {selectedInquiry.product && (
                <div>
                  <label className="text-sm text-gray-400">Product</label>
                  <div className="font-semibold">{selectedInquiry.product.title}</div>
                </div>
              )}

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <div className="mt-2 p-4 bg-black/50 rounded-lg">
                  <p className="text-gray-300 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <label className="text-sm text-gray-400">Status</label>
                  <div className="mt-1">
                    <Badge className={getStatusColor(selectedInquiry.status)}>
                      {selectedInquiry.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {selectedInquiry.status !== 'read' && (
                    <Button
                      onClick={() => {
                        updateInquiryStatus(selectedInquiry.id, 'read')
                        setSelectedInquiry(null)
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Mark as Read
                    </Button>
                  )}
                  
                  {selectedInquiry.status !== 'replied' && (
                    <Button
                      onClick={() => {
                        updateInquiryStatus(selectedInquiry.id, 'replied')
                        setSelectedInquiry(null)
                      }}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark as Replied
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}