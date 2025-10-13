import { NextResponse } from 'next/server'
import { seedDatabase } from '@/lib/seed'

export async function POST() {
  try {
    const result = await seedDatabase()
    
    if (result.success) {
      return NextResponse.json({ message: 'Database seeded successfully!' })
    } else {
      return NextResponse.json(
        { error: 'Failed to seed database', details: result.error },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}