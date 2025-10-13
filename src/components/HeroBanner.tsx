'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      title: "Intelligent Living Starts Here",
      subtitle: "Transform your home into a smart sanctuary with cutting-edge automation solutions",
      image: "/images/banner.jpg",
      cta: "Explore Solutions",
      ctaLink: "/products",
      features: [
        { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast Response" },
        { icon: <Shield className="w-5 h-5" />, text: "Bank-Level Security" },
        { icon: <Sparkles className="w-5 h-5" />, text: "AI-Powered Automation" }
      ]
    },
    {
      title: "Premium Home Automation",
      subtitle: "Experience the future of living with seamlessly integrated smart technology",
      image: "/images/banner.jpg",
      cta: "Book Consultation",
      ctaLink: "/contact",
      features: [
        { icon: <Zap className="w-5 h-5" />, text: "Energy Efficient" },
        { icon: <Shield className="w-5 h-5" />, text: "24/7 Monitoring" },
        { icon: <Sparkles className="w-5 h-5" />, text: "Voice Control" }
      ]
    },
    {
      title: "Smart Hospitality Solutions",
      subtitle: "Elevate guest experience with intelligent hotel automation systems",
      image: "/images/banner.jpg",
      cta: "Learn More",
      ctaLink: "/services/hotel-automation",
      features: [
        { icon: <Zap className="w-5 h-5" />, text: "Guest Satisfaction" },
        { icon: <Shield className="w-5 h-5" />, text: "Staff Efficiency" },
        { icon: <Sparkles className="w-5 h-5" />, text: "Cost Reduction" }
      ]
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{
              scale: currentSlide === index ? 1 : 1.1,
              opacity: currentSlide === index ? 1 : 0,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black/60" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Animated overlay effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Next-Generation Automation</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {slides[currentSlide].features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-blue-400">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={slides[currentSlide].ctaLink}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'w-8 bg-blue-400'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}