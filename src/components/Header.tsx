'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from "next/image";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown 
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: 'Home Automation', href: '/services/home-automation' },
    { name: 'Hotel Automation', href: '/services/hotel-automation' },
    { name: 'Office Automation', href: '/services/office-automation' }
  ]

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
      <Link href="/" className="flex items-center space-x-3">
  <Image
    src="/logo.png" // ✅ adjust path if needed (e.g. "/images/logo.png")
    alt="Reliable Automation"
    width={280}     // adjust as needed
    height={40}
    priority
    className="object-contain"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-gray-300 hover:text-white transition-colors p-0 h-auto font-normal"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900 border-white/10">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link 
                          href={service.href}
                          className="text-gray-300 hover:text-white hover:bg-white/5 w-full"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+91 79908 08715</span>
            </div>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-gray-300 font-medium">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 pb-2 border-t border-white/10">
                <div className="flex items-center space-x-2 text-sm text-gray-400 px-3 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400 px-3 py-2">
                  <Mail className="w-4 h-4" />
                  <span>info@reliableautomation.in</span>
                </div>
                <div className="px-3 py-2">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
