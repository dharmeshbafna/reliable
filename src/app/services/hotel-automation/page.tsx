'use client'

import { motion } from 'framer-motion'
import { Building, Wifi, Key, Users, Zap, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'

export default function HotelAutomationPage() {
  const features = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Smart Room Access",
      description: "Keyless entry systems with mobile app integration. Guests can access their rooms using their smartphones for enhanced convenience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Experience",
      description: "Personalized room settings, welcome scenes, and intuitive controls that make every stay memorable and comfortable."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Management",
      description: "Smart energy solutions that reduce costs by optimizing HVAC, lighting, and appliances based on occupancy."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Control",
      description: "Complete hotel management through mobile apps for both guests and staff, streamlining operations."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Connected Infrastructure",
      description: "Seamless integration of all hotel systems including lighting, climate, entertainment, and security."
    }
  ]

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Hotel Automation
            </h1>
            <p className="text-xl text-gray-400">
              Enhance guest experience with smart hospitality
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center">
                <Building className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Smart Hospitality Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your hotel into a smart destination that delights guests and optimizes operations. 
              Our comprehensive hotel automation solutions enhance guest experience while reducing operational costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h3>
            <p className="text-xl text-gray-400">Everything you need for a smart hotel</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex justify-center mb-6 text-blue-400">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center">{feature.title}</h4>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Hotel?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get started with a free consultation and discover how we can transform your hospitality business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
              >
                Explore Products
              </Link>
              
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}