'use client'

import { motion } from 'framer-motion'
import { PageLayout } from '@/components/PageLayout'
import { Shield, Eye, Lock, User, Database, Globe } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At Reliable Automation, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                By using Reliable Automation's services, you consent to the practices described in this policy.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-bold text-blue-400">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
                  <p className="text-gray-300 mb-3">We may collect the following types of personal information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Name, email address, phone number</li>
                    <li>Home and business addresses</li>
                    <li>Payment information (processed securely)</li>
                    <li>Project requirements and preferences</li>
                    <li>Communication records</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Technical Information</h3>
                  <p className="text-gray-300 mb-3">We automatically collect certain technical information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-blue-400">How We Use Your Information</h2>
              </div>
              
              <p className="text-gray-300 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To provide and maintain our automation services</li>
                <li>To process requests and respond to inquiries</li>
                <li>To send project updates and technical support</li>
                <li>To improve our website and service offerings</li>
                <li>To communicate promotional offers (with consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and ensure security</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-blue-400">Information Sharing</h2>
              </div>
              
              <p className="text-gray-300 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With service providers who assist in our operations</li>
                <li>With trusted partners for integrated services</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with business transfers or mergers</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-blue-400">Data Security</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and database protection</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
                <li>Access controls and authentication systems</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-blue-400">Your Rights</h2>
              </div>
              
              <p className="text-gray-300 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Marketing cookies for personalized content</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Policy Updates</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications for significant changes</li>
                <li>Displaying prominent notices on our site</li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white ml-2">privacy@reliableautomation.com</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white ml-2">+91 98765 43210</span>
                </div>
                <div>
                  <span className="text-gray-400">Address:</span>
                  <span className="text-white ml-2">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}