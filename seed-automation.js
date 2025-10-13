const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const automationProducts = [
  {
    title: 'Smart Touch Panels',
    slug: 'smart-touch-panels',
    description: 'Advanced touch control panels with intuitive interface for managing your entire home automation system. Features customizable scenes, real-time feedback, and seamless integration with all smart devices.',
    category: 'Electrical Switches',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Capacitive touch display',
      'Customizable scenes',
      'Real-time device status',
      'Voice control compatible',
      'Energy monitoring',
      'Multi-room control'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Locks',
    slug: 'smart-locks',
    description: 'Next-generation smart locks providing keyless entry with multiple authentication methods including fingerprint, PIN, mobile app, and traditional keys for maximum security and convenience.',
    category: 'Security',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Biometric fingerprint access',
      'Mobile app control',
      'Temporary access codes',
      'Auto-lock functionality',
      'Break-in alerts',
      'Battery backup'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Video Door Phones',
    slug: 'smart-video-door-phones',
    description: 'HD video door phones with two-way communication, motion detection, and remote access. See and speak to visitors from anywhere using your smartphone.',
    category: 'Security',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      '1080p HD video',
      'Two-way audio communication',
      'Motion detection alerts',
      'Night vision',
      'Cloud recording',
      'Mobile app integration'
    ]),
    status: 'active'
  },
  {
    title: 'Cameras',
    slug: 'smart-cameras',
    description: 'Professional-grade security cameras with AI-powered detection, night vision, and cloud storage. Monitor your property 24/7 with advanced surveillance technology.',
    category: 'Security',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      '4K Ultra HD resolution',
      'AI person detection',
      'Night vision up to 30ft',
      'Pan-tilt-zoom functionality',
      'Cloud and local storage',
      'Smart alerts'
    ]),
    status: 'active'
  },
  {
    title: 'Retrofit Solutions',
    slug: 'retrofit-automation',
    description: 'Convert existing electrical systems into smart automation without rewiring. Perfect for homes and offices where you want to add smart features without major construction.',
    category: 'Electrical Switches',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'No new wiring required',
      'Works with existing switches',
      'Easy installation',
      'Mobile app control',
      'Scheduling features',
      'Energy monitoring'
    ]),
    status: 'active'
  },
  {
    title: 'Plug n Play Devices',
    slug: 'plug-play-devices',
    description: 'Easy-to-install smart devices that work right out of the box. Simply plug in and connect to the app to start automating your home instantly.',
    category: 'Consumer Appliances',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Zero configuration setup',
      'Plug and play installation',
      'App control within minutes',
      'Voice assistant compatible',
      'Energy usage tracking',
      'Compact design'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Lighting',
    slug: 'smart-lighting',
    description: 'Intelligent lighting solutions with color control, dimming, and scheduling. Create the perfect ambiance for any occasion with smart bulbs and strips.',
    category: 'Lighting',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      '16 million color options',
      'Dimming control',
      'Music synchronization',
      'Scheduling and timers',
      'Energy efficient LEDs',
      'Group control'
    ]),
    status: 'active'
  },
  {
    title: 'Smart Sensors',
    slug: 'smart-sensors',
    description: 'Multi-functional sensors for motion, temperature, humidity, and air quality monitoring. Automate your home based on environmental conditions and occupancy.',
    category: 'Security',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Motion detection',
      'Temperature monitoring',
      'Humidity sensing',
      'Air quality measurement',
      'Battery powered',
      'Long wireless range'
    ]),
    status: 'active'
  },
  {
    title: 'Curtain Controllers',
    slug: 'curtain-controllers',
    description: 'Automated curtain and blind controllers for natural light management. Schedule opening/closing times or control based on sunlight and occupancy.',
    category: 'Motorised Products',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Quiet motor operation',
      'Light sensor integration',
      'Scheduled automation',
      'Manual override option',
      'Multiple curtain types',
      'Battery backup'
    ]),
    status: 'active'
  },
  {
    title: 'Commercial Devices',
    slug: 'commercial-devices',
    description: 'Heavy-duty automation solutions designed for commercial spaces including offices, hotels, and retail environments with advanced features and robust construction.',
    category: 'Commercial Devices',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Commercial grade durability',
      'Multi-zone control',
      'Advanced scheduling',
      'Energy management',
      'Integration with BMS',
      'Remote monitoring'
    ]),
    status: 'active'
  },
  {
    title: 'QR Products',
    slug: 'qr-automation-products',
    description: 'QR code-based automation solutions for contactless access control, information sharing, and quick automation triggers in commercial and public spaces.',
    category: 'QR Products',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Contactless access',
      'Information sharing',
      'Quick automation triggers',
      'Custom QR codes',
      'Analytics tracking',
      'Easy management'
    ]),
    status: 'active'
  },
  {
    title: 'Kitchen Appliances',
    slug: 'smart-kitchen-appliances',
    description: 'Smart kitchen appliances with automation features for modern cooking. Monitor and control your kitchen devices remotely for enhanced convenience and safety.',
    category: 'Kitchen Appliances',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ]),
    features: JSON.stringify([
      'Remote monitoring',
      'Recipe automation',
      'Energy tracking',
      'Safety alerts',
      'Maintenance reminders',
      'Voice control'
    ]),
    status: 'active'
  }
];

async function seedAutomation() {
  try {
    console.log('🌱 Starting automation database seed...');
    
    // Clear existing data
    await prisma.product.deleteMany();
    await prisma.inquiry.deleteMany();
    await prisma.admin.deleteMany();
    
    console.log('🧹 Cleared existing data');
    
    // Add automation products
    for (const product of automationProducts) {
      await prisma.product.create({
        data: product
      });
    }
    
    console.log(`✅ Created ${automationProducts.length} automation products`);
    
    // Add admin user
    await prisma.admin.create({
      data: {
        email: 'admin@reliableautomation.com',
        name: 'Reliable Automation Admin',
        password: 'admin123', // In production, this should be hashed
        role: 'admin'
      }
    });
    
    console.log('✅ Created admin user');
    console.log('🎉 Automation database seeded successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding automation database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAutomation();