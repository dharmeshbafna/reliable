'use client'

import { useState } from 'react'

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    try {
      // Simple authentication - in production, this should call your API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        
        // Store authentication token
        if (typeof window !== 'undefined') {
          localStorage.setItem('adminToken', data.token || 'authenticated')
          localStorage.setItem('adminUser', JSON.stringify({
            email: email,
            name: 'Admin User'
          }))
        }
        
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('adminUser')
      }
    }
  }

  const isAuthenticated = (): boolean => {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem('adminToken')
  }

  return {
    login,
    logout,
    isAuthenticated,
    isLoading
  }
}