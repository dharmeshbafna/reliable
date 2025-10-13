import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    console.log('GET request for inquiries')
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    const where: any = {}
    if (status) {
      where.status = status
    }

    const inquiries = await db.inquiry.findMany({
      where,
      include: {
        product: {
          select: {
            title: true,
            slug: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    console.log(`Found ${inquiries.length} inquiries`)

    return NextResponse.json(inquiries)
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('POST request for new inquiry')
    
    const body = await request.json()
    const { name, email, phone, company, message, productId } = body

    console.log('Inquiry data:', { name, email, phone, company, productId })

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const inquiry = await db.inquiry.create({
      data: {
        name,
        email,
        phone,
        company,
        message,
        productId: productId || null
      },
      include: {
        product: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    })

    console.log('Inquiry created successfully:', inquiry.name)

    return NextResponse.json(inquiry, { status: 201 })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack'
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to create inquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}