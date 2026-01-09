'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Offers & Promotions
              </h1>
              <p className="text-gray-400 mt-1">Exclusive deals and promotions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Exclusive Offers
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Smileathon 2026 Exclusive Smart Devices Offer.
            </p>
            
            <div className="flex justify-center mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative w-full max-w-5xl"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/offer-banner.jpeg"
                    alt="Special Offers Banner"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16"
            >
              <Link
                href="/offers/smileathon-2026"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 text-lg"
              >
                View Smileathon 2026 Offer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
