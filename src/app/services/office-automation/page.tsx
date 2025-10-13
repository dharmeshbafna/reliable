'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Zap, Shield, Clock, TrendingUp, Smartphone, Lock } from 'lucide-react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'

export default function OfficeAutomationPage() {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Access Control",
      description: "Smart access management with keyless entry, biometric authentication, and visitor management systems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meeting Rooms",
      description: "Automated meeting room booking, environmental control, and AV integration for seamless collaboration."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Management",
      description: "Intelligent energy monitoring and control to reduce costs and environmental impact."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Systems",
      description: "Advanced surveillance, intrusion detection, and emergency response systems for workplace safety."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time & Attendance",
      description: "Automated employee time tracking with biometric verification and seamless payroll integration."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Control",
      description: "Complete office management through our intuitive mobile app for administrators and employees."
    }
  ]

  const benefits = [
    "Reduce energy costs by up to 40%",
    "Improve employee productivity and satisfaction",
    "Enhance security and compliance",
    "Streamline administrative processes",
    "Real-time monitoring and analytics",
    "Scalable solutions for growing businesses"
  ]

  return (
    <PageLayout>
      {/* Page Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Office Automation
            </h1>
            <p className="text-xl text-gray-400">
              Optimize workplace efficiency with intelligent solutions
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
                <Briefcase className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Smart Office Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your workplace into an intelligent environment that enhances productivity, 
              reduces costs, and improves employee satisfaction. Our comprehensive office automation 
              solutions integrate seamlessly with your existing infrastructure.
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
            <p className="text-xl text-gray-400">Everything you need for a smart workplace</p>
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
                Why Choose Office Automation?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                  alt="Smart Office"
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
            <p className="text-xl text-gray-400">Simple steps to transform your office</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We evaluate your office infrastructure and automation requirements"
              },
              {
                step: "02", 
                title: "Implementation",
                description: "Our team installs and configures the automation systems with minimal disruption"
              },
              {
                step: "03",
                title: "Training & Support",
                description: "We train your staff and provide ongoing technical support"
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
              Ready to Modernize Your Office?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get started with a free consultation and discover how we can transform your workplace.
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