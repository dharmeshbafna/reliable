import { db } from './db'

const sampleProducts = [
  {
    title: 'Smart Touch Switches',
    slug: 'smart-touch-switches',
    description: 'Premium touch-sensitive switches with modern design and smart controls. Replace traditional switches with our elegant touch panels.',
    category: 'Electrical Switches',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Touch-sensitive controls',
      'Mobile app integration',
      'Voice control compatible',
      'Modern glass design',
      'LED indicators',
      'Easy installation'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Lighting System',
    slug: 'smart-lighting-system',
    description: 'Complete intelligent lighting solution with color control, scheduling, and energy monitoring. Transform your space with smart lighting.',
    category: 'Lighting',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      '16 million colors',
      'Scheduling automation',
      'Energy monitoring',
      'Mobile app control',
      'Voice commands',
      'Scene creation'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Door Lock',
    slug: 'smart-door-lock',
    description: 'Advanced security with biometric access, remote control, and visitor management. Complete peace of mind for your home.',
    category: 'Security',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Biometric fingerprint',
      'Mobile app control',
      'Temporary access codes',
      'Auto-lock feature',
      'Tamper alerts',
      'Battery backup'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Curtain Controller',
    slug: 'smart-curtain-controller',
    description: 'Automated curtain control with scheduling, light sensors, and remote operation. Perfect for smart home integration.',
    category: 'Motor Products',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Scheduled operation',
      'Light sensor integration',
      'Mobile app control',
      'Quiet motor',
      'Manual override',
      'Energy saving'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Plug System',
    slug: 'smart-plug-system',
    description: 'Plug-and-play smart plugs for existing appliances. Control any device remotely and monitor energy consumption.',
    category: 'Appliances',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Plug and play',
      'Energy monitoring',
      'Mobile app control',
      'Voice commands',
      'Scheduling',
      'No wiring required'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Camera System',
    slug: 'smart-camera-system',
    description: 'HD security cameras with AI detection, cloud storage, and mobile monitoring. Complete surveillance solution.',
    category: 'Security',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'HD video quality',
      'AI motion detection',
      'Cloud storage',
      'Mobile alerts',
      'Two-way audio',
      'Night vision'
    ]),
    status: 'active'
  }
]

const sampleAdmin = {
  email: 'admin@reliableautomation.com',
  name: 'Reliable Automation Admin',
  password: 'admin123', // In production, this should be hashed
  role: 'admin'
}

export async function seedDatabase() {
  try {
    // Clear existing data
    await db.product.deleteMany()
    await db.inquiry.deleteMany()
    await db.admin.deleteMany()

    // Add sample products
    for (const product of sampleProducts) {
      await db.product.create({
        data: product
      })
    }

    // Add admin user
    await db.admin.create({
      data: sampleAdmin
    })

    console.log('Database seeded successfully!')
    return { success: true }
  } catch (error) {
    console.error('Error seeding database:', error)
    return { success: false, error }
  }
}