const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const sampleProducts = [
  {
    title: 'Smart Touch Switches',
    slug: 'smart-touch-switches',
    description: 'Premium touch-sensitive switches with modern design and smart controls. Replace traditional switches with our elegant touch panels.',
    category: 'Electrical Switches',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
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
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=300&fit=crop'
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
  }
];

const sampleAdmin = {
  email: 'admin@reliableautomation.com',
  name: 'Reliable Automation Admin',
  password: 'admin123',
  role: 'admin'
};

async function seedDatabase() {
  try {
    console.log('Seeding database...');
    
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.inquiry.deleteMany();
    await prisma.admin.deleteMany();
    
    // Add sample products
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      });
    }
    
    // Add admin user
    await prisma.admin.create({
      data: sampleAdmin
    });
    
    console.log('Database seeded successfully!');
    console.log('Admin login: admin@reliableautomation.com / admin123');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();