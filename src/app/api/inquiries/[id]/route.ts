import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('PATCH request for inquiry:', params.id)
    
    const body = await request.json()
    console.log('Request body:', body)
    
    const { status } = body

    if (!params.id) {
      return NextResponse.json(
        { error: 'Inquiry ID is required' },
        { status: 400 }
      )
    }

    if (!status) {
      return NextResponse.json(
        { error: 'Status is required' },
        { status: 400 }
      )
    }

    // Check if inquiry exists
    const existingInquiry = await db.inquiry.findUnique({
      where: { id: params.id }
    })

    if (!existingInquiry) {
      console.log('Inquiry not found:', params.id)
      return NextResponse.json(
        { error: 'Inquiry not found' },
        { status: 404 }
      )
    }

    console.log('Found existing inquiry:', existingInquiry.name)

    // Update inquiry status
    const updatedInquiry = await db.inquiry.update({
      where: { id: params.id },
      data: { status },
      include: {
        product: {
          select: {
            title: true,
            slug: true
          }
        }
      }
    })

    console.log('Inquiry updated successfully:', updatedInquiry.name)

    return NextResponse.json(updatedInquiry)
  } catch (error) {
    console.error('Error updating inquiry:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack'
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to update inquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}