import { NextRequest, NextResponse } from 'next/server'

// Hardcoded admin credentials (in production, use database)
const ADMIN_CREDENTIALS = {
  email: 'admin@reliableautomation.com',
  password: 'admin123'
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      // Create a simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')
      
      // Create user object
      const user = {
        id: '1',
        email: ADMIN_CREDENTIALS.email,
        name: 'Admin User',
        role: 'admin'
      }

      // Set token in response
      const response = NextResponse.json({
        message: 'Login successful',
        token,
        user
      })

      // Set HTTP-only cookie for additional security
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 hours
      })

      return response
    } else {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}