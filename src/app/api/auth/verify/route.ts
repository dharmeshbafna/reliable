import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      )
    }

    // Simple token verification (in production, use JWT verification)
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8')
      const [email, timestamp] = decoded.split(':')
      
      // Check if token is not too old (24 hours)
      const tokenAge = Date.now() - parseInt(timestamp)
      const maxAge = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
      
      if (tokenAge > maxAge) {
        return NextResponse.json(
          { error: 'Token expired' },
          { status: 401 }
        )
      }

      // Verify email format
      if (email === 'admin@reliableautomation.com') {
        return NextResponse.json({
          valid: true,
          user: {
            id: '1',
            email: 'admin@reliableautomation.com',
            name: 'Admin User',
            role: 'admin'
          }
        })
      } else {
        return NextResponse.json(
          { error: 'Invalid token' },
          { status: 401 }
        )
      }
    } catch (decodeError) {
      return NextResponse.json(
        { error: 'Invalid token format' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Token verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}