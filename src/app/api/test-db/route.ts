import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    // Test database connection
    const productCount = await db.product.count()
    const inquiryCount = await db.inquiry.count()
    
    return NextResponse.json({
      success: true,
      productCount,
      inquiryCount,
      message: 'Database connection successful'
    })
  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Database connection failed'
    }, { status: 500 })
  }
}