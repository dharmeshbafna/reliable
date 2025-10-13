'use client'

import { motion } from 'framer-motion'
import { Home, Lightbulb, Shield, Zap, Smartphone, Thermometer, Lock, Camera } from 'lucide-react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'

export default function HomeAutomationPage() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Lighting",
      description: "Control lights throughout your home with voice commands, schedules, and scenes. Set the perfect ambiance for any occasion."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Comprehensive security system with smart locks, cameras, and sensors. Monitor your home 24/7 from anywhere."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Climate Control",
      description: "Intelligent temperature and humidity control for optimal comfort and energy efficiency throughout your home."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Control",
      description: "Complete control of your home through our intuitive mobile app. Manage everything from anywhere in the world."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Smart Access",
      description: "Keyless entry systems with fingerprint, PIN, and mobile access. Grant temporary access to guests and service providers."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Video Surveillance",
      description: "HD cameras with AI-powered detection and cloud storage. Keep an eye on your property with advanced monitoring."
    }
  ]

  const benefits = [
    "Energy savings up to 30%",
    "Enhanced security and peace of mind",
    "Increased property value",
    "Convenience and comfort",
    "Remote monitoring and control",
    "Integration with existing appliances"
  ]

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Home Automation
            </h1>
            <p className="text-xl text-gray-400">
              Transform your house into an intelligent home
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
                <Home className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Smart Home Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your living space into an intelligent home that adapts to your lifestyle. 
              Our comprehensive home automation solutions integrate lighting, security, climate, 
              and entertainment into one seamless system that you can control from anywhere.
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
            <p className="text-xl text-gray-400">Everything you need for a complete smart home</p>
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Smart Home Automation?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                  alt="Smart Home"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h3>
            <p className="text-xl text-gray-400">Simple steps to transform your home</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We assess your home and understand your automation needs"
              },
              {
                step: "02", 
                title: "Installation",
                description: "Our experts install and configure the automation system"
              },
              {
                step: "03",
                title: "Training & Support",
                description: "We train you on using the system and provide ongoing support"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-blue-400/20 mb-4">{item.step}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
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
              Ready to Make Your Home Smart?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get started with a free consultation and discover how we can transform your living space.
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