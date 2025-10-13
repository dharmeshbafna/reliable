'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageLayout } from '@/components/PageLayout'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Shield, 
  Zap,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Reliable Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming spaces into intelligent environments since 2020. We are Ahmedabad's premier 
              smart home automation company, dedicated to bringing cutting-edge technology to your fingertips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">From Vision to Reality</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2020, Reliable Automation began with a simple vision: to make smart home 
                technology accessible and intuitive for everyone. What started as a small team of 
                passionate engineers has grown into Ahmedabad's most trusted automation company.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We've completed over 500 projects across residential, commercial, and hospitality 
                sectors, earning the trust of clients through our commitment to quality, innovation, 
                and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-sm">500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">5 Year Warranty</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission & Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To revolutionize living spaces through innovative automation solutions that 
                    enhance comfort, security, and energy efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Constantly pushing boundaries with cutting-edge technology and creative 
                    solutions tailored to modern lifestyles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-800 h-full">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Building trust through dependable products, expert installation, and 
                    exceptional after-sales support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">What We Do</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Home Automation",
                description: "Complete smart home solutions for modern living"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Office Automation",
                description: "Intelligent systems for productive workplaces"
              },
              {
                icon: <Hotel className="w-8 h-8" />,
                title: "Hotel Solutions",
                description: "Enhanced guest experience with smart technology"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Energy Management",
                description: "Optimize power consumption and reduce costs"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-colors h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section 
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                role: "Founder & CEO",
                description: "Visionary leader with 15+ years in automation technology"
              },
              {
                name: "Priya Shah",
                role: "CTO",
                description: "Tech expert specializing in IoT and smart systems"
              },
              {
                name: "Amit Kumar",
                role: "Head of Operations",
                description: "Ensuring excellence in project delivery and customer service"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-gray-400">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied customers who have already made their spaces smarter with Reliable Automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800">
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-500" />
                <span className="text-sm text-gray-400">Ahmedabad, Gujarat</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-green-500" />
                <span className="text-sm text-gray-400">+91 79908 08715</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-purple-500" />
                <span className="text-sm text-gray-400">info@reliableautomation.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

// Import missing icons
import { Home, Building, Hotel } from 'lucide-react'