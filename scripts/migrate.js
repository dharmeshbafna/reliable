require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting SQLite to Neon PostgreSQL Migration...');
console.log('📋 DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env file');
  console.log('Please update your .env file with your Neon connection string');
  process.exit(1);
}

// Check if SQLite database exists
const sqlitePath = './db/custom.db';
if (!fs.existsSync(sqlitePath)) {
  console.error('❌ SQLite database not found at:', sqlitePath);
  process.exit(1);
}

// SQLite client
const sqlitePrisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./db/custom.db',
    },
  },
});

// PostgreSQL client
const postgresPrisma = new PrismaClient();

async function migrate() {
  try {
    console.log('📖 Connecting to SQLite...');
    await sqlitePrisma.$connect();
    
    console.log('🔌 Connecting to PostgreSQL...');
    await postgresPrisma.$connect();
    
    // Test PostgreSQL connection
    console.log('🧪 Testing PostgreSQL connection...');
    await postgresPrisma.$queryRaw`SELECT 1`;
    console.log('✅ PostgreSQL connection successful!');
    
    // Get data from SQLite
    console.log('📦 Reading products from SQLite...');
    const products = await sqlitePrisma.product.findMany();
    console.log(`Found ${products.length} products`);
    
    console.log('📧 Reading inquiries from SQLite...');
    const inquiries = await sqlitePrisma.inquiry.findMany();
    console.log(`Found ${inquiries.length} inquiries`);
    
    console.log('👤 Reading admins from SQLite...');
    const admins = await sqlitePrisma.admin.findMany();
    console.log(`Found ${admins.length} admins`);
    
    // Migrate data
    console.log('💾 Migrating products to PostgreSQL...');
    for (const product of products) {
      await postgresPrisma.product.upsert({
        where: { id: product.id },
        update: {
          title: product.title,
          slug: product.slug,
          description: product.description,
          category: product.category,
          image: product.image,
          images: product.images,
          features: product.features,
          status: product.status,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        },
        create: {
          id: product.id,
          title: product.title,
          slug: product.slug,
          description: product.description,
          category: product.category,
          image: product.image,
          images: product.images,
          features: product.features,
          status: product.status,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        },
      });
    }
    
    console.log('💾 Migrating inquiries to PostgreSQL...');
    for (const inquiry of inquiries) {
      await postgresPrisma.inquiry.upsert({
        where: { id: inquiry.id },
        update: {
          name: inquiry.name,
          email: inquiry.email,
          phone: inquiry.phone,
          company: inquiry.company,
          message: inquiry.message,
          productId: inquiry.productId,
          status: inquiry.status,
          createdAt: inquiry.createdAt,
          updatedAt: inquiry.updatedAt,
        },
        create: {
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          phone: inquiry.phone,
          company: inquiry.company,
          message: inquiry.message,
          productId: inquiry.productId,
          status: inquiry.status,
          createdAt: inquiry.createdAt,
          updatedAt: inquiry.updatedAt,
        },
      });
    }
    
    console.log('💾 Migrating admins to PostgreSQL...');
    for (const admin of admins) {
      await postgresPrisma.admin.upsert({
        where: { id: admin.id },
        update: {
          email: admin.email,
          name: admin.name,
          password: admin.password,
          role: admin.role,
          createdAt: admin.createdAt,
          updatedAt: admin.updatedAt,
        },
        create: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          password: admin.password,
          role: admin.role,
          createdAt: admin.createdAt,
          updatedAt: admin.updatedAt,
        },
      });
    }
    
    console.log('🎉 Migration completed successfully!');
    console.log('📊 Summary:');
    console.log(`  - Products: ${products.length}`);
    console.log(`  - Inquiries: ${inquiries.length}`);
    console.log(`  - Admins: ${admins.length}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  } finally {
    await sqlitePrisma.$disconnect();
    await postgresPrisma.$disconnect();
  }
}

migrate();