'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Tag, Home, Shield, Clock, Wrench, RotateCcw, Scale, Calendar, Percent, ShoppingCart, X, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Smileathon2026Page() {
  const discountSlabs = [
    { value: "Below ₹30,000", discount: "20% OFF" },
    { value: "₹30,000 to ₹60,000", discount: "30% OFF" },
    { value: "Above ₹60,000", discount: "40% OFF" }
  ]

  const products = [
    "Smart locks",
    "Touch panel switches", 
    "Video door phones",
    "Smart door bells",
    "Smart cameras",
    "Home automation controllers",
    "Mobile app based automation systems"
  ]

  const nonClubbing = [
    "Any ongoing festival sale",
    "Dealer special discounts",
    "Corporate pricing",
    "Referral offers",
    "Cashback offers",
    "Bank offers",
    "Promotional schemes"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/offers">
              <button className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smileathon 2026
              </h1>
              <p className="text-gray-400 mt-1">Exclusive Smart Home Offer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
              <Tag className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Exclusive Coupon Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Smileathon 2026
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This coupon is valid only for customers who physically present the Smileathon 2026 coupon at the time of purchase.
            </p>
          </motion.div>

          {/* Discount Slabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Percent className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-bold">Discount Slabs</h3>
            </div>
            <p className="text-gray-400 mb-6">The discount will be calculated on the total invoice value before taxes.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {discountSlabs.map((slab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all"
                >
                  <div className="text-2xl font-bold text-blue-400 mb-2">{slab.discount}</div>
                  <div className="text-gray-300">{slab.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Products Covered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Home className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold">Products Covered</h3>
            </div>
            <p className="text-gray-400 mb-6">This offer is valid on all Reliable Smart Home products including:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 bg-gray-900/50 border border-white/5 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{product}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              (Installation and accessories may be chargeable separately unless mentioned)
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* How to Avail */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">How to Avail the Offer</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Customer must physically carry the Smileathon 2026 coupon",
                  "Coupon must be shown before billing",
                  "Coupon QR will be scanned and validated",
                  "Discount will be applied based on the total order value slab"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-purple-400">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Non-Clubbing Rule */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold">Non-Clubbing Rule</h3>
              </div>
              <p className="text-gray-400 mb-4">This offer cannot be combined with:</p>
              <div className="space-y-2">
                {nonClubbing.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Only one offer is allowed per order.
              </p>
            </motion.div>
          </div>

          {/* Validity & Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Validity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Validity</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Valid till 31 December 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Coupon is valid for one time use only</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Coupon must be redeemed before making payment</span>
                </div>
              </div>
            </motion.div>

            {/* Usage Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold">Usage Conditions</h3>
              </div>
              <div className="space-y-2">
                {[
                  "One coupon per household",
                  "One coupon per invoice",
                  "Cannot be split across multiple bills",
                  "Cannot be reused after redemption",
                  "Photocopies or screenshots are not accepted",
                  "Damaged or altered coupons will be rejected"
                ].map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                    <span className="text-gray-300 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Installation & Service Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-teal-400" />
              <h3 className="text-2xl font-bold">Installation & Service Terms</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Installation charges are not included unless mentioned in quotation",
                  "Site readiness must be ensured by the customer",
                  "Additional wiring and accessories are chargeable",
                  "Final discount applies only on product value not on labour or civil work"
                ].map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Returns and Cancellations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold">Returns and Cancellations</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  "If order is cancelled, coupon is treated as used",
                  "Discount cannot be transferred to another order",
                  "No cash or credit in place of this coupon"
                ].map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <RotateCcw className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{term}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Company Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold">Company Rights</h3>
              </div>
              <p className="text-gray-400 mb-4">Reliable Smart Solution reserves the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Verify coupon authenticity",
                  "Modify or withdraw this offer without prior notice",
                  "Reject any coupon in case of misuse"
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
)
        }
