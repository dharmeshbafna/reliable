'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Phone, MapPin, Home as HomeIcon, Building, Briefcase, MessageCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      id: 1,
      title: "Home Automation",
      description: "Transform your house into an intelligent home with seamless automation solutions",
      icon: <HomeIcon className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      link: "/services/home-automation"
    },
    {
      id: 2,
      title: "Hotel Automation",
      description: "Enhance guest experience with smart hospitality solutions",
      icon: <Building className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      link: "/services/hotel-automation"
    },
    {
      id: 3,
      title: "Office Automation",
      description: "Optimize workplace efficiency with intelligent commercial solutions",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      link: "/services/office-automation"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Homeowner",
      content: "Reliable Automation transformed our home into a smart living space. The convenience and control we now have is incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Hotel Manager",
      content: "Our guests love the smart room features. It has significantly improved their experience and our operational efficiency.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Business Owner",
      content: "The office automation system has streamlined our operations and reduced energy costs significantly.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "What is home automation?",
      answer: "Home automation is the integration of smart devices and systems to control and automate various aspects of your home, including lighting, climate, security, and entertainment, all accessible through a central app or voice commands."
    },
    {
      question: "Is it compatible with my existing appliances?",
      answer: "Yes! Our solutions are designed to work with your existing appliances and systems. We avoid costly overhauls by integrating with what you already have."
    },
    {
      question: "How secure is the system?",
      answer: "Security is our top priority. We use industry-standard encryption and security protocols to ensure your smart home remains protected from unauthorized access."
    },
    {
      question: "Can I control it when I'm away from home?",
      answer: "Absolutely! Our mobile app gives you complete control of your home from anywhere in the world, as long as you have an internet connection."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Reliable Automation
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link>
              <div className="relative group">
                <button className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/services/home-automation" className="block px-4 py-2 hover:bg-white/10 transition-colors">Home Automation</Link>
                  <Link href="/services/hotel-automation" className="block px-4 py-2 hover:bg-white/10 transition-colors">Hotel Automation</Link>
                  <Link href="/services/office-automation" className="block px-4 py-2 hover:bg-white/10 transition-colors">Office Automation</Link>
                </div>
              </div>
              <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
              <Link href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link>
              <Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="#home" className="block hover:text-blue-400 transition-colors">Home</Link>
              <Link href="#about" className="block hover:text-blue-400 transition-colors">About Us</Link>
              <Link href="/services/home-automation" className="block hover:text-blue-400 transition-colors">Home Automation</Link>
              <Link href="/services/hotel-automation" className="block hover:text-blue-400 transition-colors">Hotel Automation</Link>
              <Link href="/services/office-automation" className="block hover:text-blue-400 transition-colors">Office Automation</Link>
              <Link href="/products" className="block hover:text-blue-400 transition-colors">Products</Link>
              <Link href="#testimonials" className="block hover:text-blue-400 transition-colors">Testimonials</Link>
              <Link href="#faq" className="block hover:text-blue-400 transition-colors">FAQ</Link>
              <Link href="#contact" className="block hover:text-blue-400 transition-colors">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A premium home deserves more than just beauty—it deserves intelligence.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Reliable Automation turns living spaces into living experiences, where every detail responds to you effortlessly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105"
            >
              About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
              <p>
                Reliable Automation is where innovation meets everyday living. Based in Ahmedabad, we specialize in creating complete home automation solutions that combine convenience, safety, and elegance under one roof.
              </p>
              <p>
                Who we are is simple: A team dedicated to making smart living accessible and reliable for everyone.
              </p>
              <p>
                What we do is transform houses into intelligent homes that adapt to your lifestyle, enhance comfort and protect what matters most.
              </p>
              <p>
                And what this website offers is a window into that world—an easy way to explore our wide range of automation products, discover how they can integrate with your existing home and learn how technology can quietly support your family's comfort and peace of mind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">Comprehensive automation solutions for every space</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <p className="text-xl text-gray-400">What our clients say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know about home automation</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-400">Ready to transform your space into a smart one?</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="+91 1234567890"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us about your automation needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-full transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">info@reliableautomation.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">+91 1234567890</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Reliable Automation</h3>
              <p className="text-gray-400">Transforming houses into intelligent homes with smart automation solutions.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-blue-400 transition-colors">Smart Touch Panels</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition-colors">Smart Locks</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition-colors">Smart Lighting</Link></li>
                <li><Link href="/products" className="hover:text-blue-400 transition-colors">Security Systems</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Reliable Automation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}