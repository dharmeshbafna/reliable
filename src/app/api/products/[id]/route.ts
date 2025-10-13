import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('GET request for product:', params.id)
    
    // Try to find by ID first, then by slug
    let product = await db.product.findUnique({
      where: { id: params.id }
    })

    if (!product) {
      // Try to find by slug
      product = await db.product.findUnique({
        where: { slug: params.id }
      })
    }

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Parse features if it's a JSON string
    if (product.features && typeof product.features === 'string') {
      try {
        product.features = JSON.parse(product.features)
      } catch (e) {
        // Keep as string if it's not valid JSON
      }
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('PATCH request started for product:', params.id)
    
    const body = await request.json()
    console.log('Request body:', body)
    
    const { title, slug, description, category, image, status, features } = body

    if (!params.id) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    // Check if product exists
    const existingProduct = await db.product.findUnique({
      where: { id: params.id }
    })

    if (!existingProduct) {
      console.log('Product not found:', params.id)
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    console.log('Found existing product:', existingProduct.title)

    // Check if slug is unique (if changed)
    if (slug && slug !== existingProduct.slug) {
      const slugExists = await db.product.findFirst({
        where: { 
          slug,
          id: { not: params.id }
        }
      })

      if (slugExists) {
        return NextResponse.json(
          { error: 'Product with this slug already exists' },
          { status: 400 }
        )
      }
    }

    // Prepare update data
    const updateData: any = {}
    
    if (title !== undefined && title !== '') {
      updateData.title = title
    }
    if (slug !== undefined && slug !== '') {
      updateData.slug = slug
    }
    if (description !== undefined && description !== '') {
      updateData.description = description
    }
    if (category !== undefined && category !== '') {
      updateData.category = category
    }
    if (image !== undefined) {
      updateData.image = image || null
    }
    if (status !== undefined) {
      updateData.status = status
    }
    
    // Handle features
    if (features !== undefined) {
      if (Array.isArray(features)) {
        updateData.features = JSON.stringify(features)
      } else if (typeof features === 'string') {
        // Check if it's already a JSON string
        try {
          JSON.parse(features)
          updateData.features = features
        } catch {
          // If not JSON, treat as comma-separated and convert to JSON array
          const featuresArray = features.split(',').map(f => f.trim()).filter(f => f)
          updateData.features = JSON.stringify(featuresArray)
        }
      }
    }

    console.log('Update data prepared:', updateData)

    // Update the product
    const updatedProduct = await db.product.update({
      where: { id: params.id },
      data: updateData
    })

    console.log('Product updated successfully:', updatedProduct.title)

    // Parse features for response
    if (updatedProduct.features && typeof updatedProduct.features === 'string') {
      try {
        updatedProduct.features = JSON.parse(updatedProduct.features)
      } catch (e) {
        // Keep as string if it's not valid JSON
      }
    }

    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error('Error updating product:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack'
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to update product',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if product exists
    const existingProduct = await db.product.findUnique({
      where: { id: params.id }
    })

    if (!existingProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    await db.product.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}