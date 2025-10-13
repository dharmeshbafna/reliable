'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Home, Building, Briefcase, ChevronDown, Star, Shield, Zap, Users } from 'lucide-react'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'
import { HeroBanner } from '@/components/HeroBanner'

export default function HomePage() {
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
      icon: <Home className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      link: "/services/home-automation",
      features: ["Smart Lighting", "Climate Control", "Security Systems", "Voice Control"]
    },
    {
      id: 2,
      title: "Hotel Automation",
      description: "Enhance guest experience with smart hospitality solutions",
      icon: <Building className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      link: "/services/hotel-automation",
      features: ["Room Control", "Energy Management", "Guest Services", "Staff Management"]
    },
    {
      id: 3,
      title: "Office Automation",
      description: "Optimize workplace efficiency with intelligent commercial solutions",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      link: "/services/office-automation",
      features: ["Access Control", "Meeting Rooms", "Energy Savings", "Employee Comfort"]
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

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "500+" },
    { icon: <Home className="w-6 h-6" />, label: "Smart Homes", value: "200+" },
    { icon: <Building className="w-6 h-6" />, label: "Hotels", value: "50+" },
    { icon: <Shield className="w-6 h-6" />, label: "Projects Completed", value: "1000+" }
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
    <PageLayout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-400">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">Comprehensive automation solutions for every space</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
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
                  
                  <div className="mb-4">
                    <div className="text-sm text-blue-400 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <p className="text-xl text-gray-400">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know about home automation</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can make your home or business smarter and more efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <Link 
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border border-white rounded-full font-semibold text-white hover:bg-white/10 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}