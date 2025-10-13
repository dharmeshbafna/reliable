'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  Settings, 
  Menu, 
  X,
  Home,
  LogOut,
  ArrowLeft
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      // Don't check auth for login page
      if (pathname === '/admin/login') {
        setIsLoading(false)
        return
      }

      const token = localStorage.getItem('adminToken')
      if (!token && pathname !== '/admin/login') {
        router.push('/admin/login')
        return
      }

      // Add token to all fetch requests
      if (token) {
        const originalFetch = window.fetch
        window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
          if (typeof input === 'string' && input.startsWith('/api')) {
            init = init || {}
            init.headers = {
              ...init.headers,
              'x-admin-token': token
            }
          }
          return originalFetch(input, init)
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [pathname, router])

  const handleLogout = async () => {
    try {
      // Call logout API
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      if (response.ok) {
        // Clear local storage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminToken')
          localStorage.removeItem('adminUser')
        }
        // Redirect to login page
        window.location.href = '/admin/login'
      } else {
        console.error('Logout failed')
        // Still clear local storage and redirect even if API fails
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminToken')
          localStorage.removeItem('adminUser')
          window.location.href = '/admin/login'
        }
      }
    } catch (error) {
      console.error('Logout error:', error)
      // Still clear local storage and redirect even if API fails
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('adminUser')
        window.location.href = '/admin/login'
      }
    }
  }

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    )
  }

  // If the current path is the login page, render children without the layout
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          x: sidebarOpen ? 0 : -256,
          transition: { type: 'spring', stiffness: 300, damping: 30 }
        }}
        className="fixed top-0 left-0 z-50 w-64 h-full bg-gradient-to-b from-gray-900 to-black border-r border-white/10 lg:translate-x-0 lg:static lg:z-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-white/10">
            <div>
              <h1 className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Admin Panel
              </h1>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-400 hover:text-white p-1 h-6 w-6"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-3 h-3 flex-shrink-0" />
                  <span className="font-medium text-xs">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute right-1 w-0.5 h-3 bg-purple-400 rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-2 border-t border-white/10 space-y-1">
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5 text-xs h-7"
              >
                <Home className="w-3 h-3 mr-2" />
                Back to Website
              </Button>
            </Link>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="w-full justify-start text-white bg-red-600 hover:bg-red-700 text-xs h-7"
            >
              <LogOut className="w-3 h-3 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-gradient-to-b from-gray-900 to-black border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-gray-300 hover:text-white p-1 h-6 w-6"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-3 h-3" />
              </Button>
              
              {/* Breadcrumb / Back button */}
              {pathname !== '/admin' && (
                <Link href="/admin">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white text-xs h-6"
                  >
                    <ArrowLeft className="w-3 h-3 mr-1" />
                    Dashboard
                  </Button>
                </Link>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">admin@reliableautomation.in</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white text-xs h-6 px-2"
              >
                <LogOut className="w-3 h-3 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}