const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const sampleProducts = [
  {
    title: 'Brand Identity Design',
    slug: 'brand-identity-design',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines. Perfect for startups and businesses looking to establish a strong visual presence.',
    category: 'Design',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Custom logo design',
      'Brand color palette',
      'Typography selection',
      'Brand guidelines document',
      'Social media templates',
      'Business card design'
    ]),
    status: 'active'
  },
  {
    title: 'E-Commerce Development',
    slug: 'ecommerce-development',
    description: 'Full-featured e-commerce website with payment integration, inventory management, and responsive design. Built with modern technologies for optimal performance.',
    category: 'Development',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Responsive design',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking system',
      'Customer accounts',
      'SEO optimization'
    ]),
    status: 'active'
  },
  {
    title: 'Digital Marketing Strategy',
    slug: 'digital-marketing-strategy',
    description: 'Comprehensive digital marketing strategy including social media marketing, content strategy, SEO, and paid advertising campaigns tailored to your business goals.',
    category: 'Marketing',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Market research',
      'Competitor analysis',
      'Social media strategy',
      'Content calendar',
      'SEO optimization',
      'PPC campaign setup'
    ]),
    status: 'active'
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile app development for iOS and Android. From concept to deployment, we create engaging mobile experiences.',
    category: 'Development',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'iOS and Android apps',
      'Cross-platform development',
      'UI/UX design',
      'App store deployment',
      'Push notifications',
      'Analytics integration'
    ]),
    status: 'active'
  },
  {
    title: 'Business Consulting',
    slug: 'business-consulting',
    description: 'Strategic business consulting to help optimize operations, improve efficiency, and drive growth. Our experts provide actionable insights for your business.',
    category: 'Consulting',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Business analysis',
      'Process optimization',
      'Growth strategy',
      'Market positioning',
      'Financial planning',
      'Performance metrics'
    ]),
    status: 'active'
  },
  {
    title: 'UI/UX Design System',
    slug: 'ui-ux-design-system',
    description: 'Comprehensive design system for consistent user experience across all digital products. Includes components, patterns, and guidelines.',
    category: 'Design',
    price: 4299,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Component library',
      'Design tokens',
      'Interaction patterns',
      'Accessibility guidelines',
      'Documentation',
      'Design tools integration'
    ]),
    status: 'active'
  }
];

async function seed() {
  try {
    console.log('🌱 Starting database seed...');
    
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.inquiry.deleteMany();
    await prisma.admin.deleteMany();
    
    console.log('🧹 Cleared existing data');
    
    // Add sample products
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      });
    }
    
    console.log(`✅ Created ${sampleProducts.length} sample products`);
    
    // Add admin user
    await prisma.admin.create({
      data: {
        email: 'admin@phunk.co.uk',
        name: 'Admin User',
        password: 'admin123', // In production, this should be hashed
        role: 'admin'
      }
    });
    
    console.log('✅ Created admin user');
    console.log('🎉 Database seeded successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();