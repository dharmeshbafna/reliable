require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

console.log('🔍 Testing Neon PostgreSQL Connection...');
console.log('📋 DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env file');
  console.log('Please update your .env file with your Neon connection string');
  process.exit(1);
}

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔌 Connecting to PostgreSQL...');
    await prisma.$connect();
    
    console.log('✅ Connected successfully!');
    
    // Test query
    const result = await prisma.$queryRaw`SELECT NOW() as current_time, version() as version`;
    console.log('📊 Query result:', result.rows[0]);
    
    // Check if tables exist
    try {
      const tables = await prisma.$queryRaw`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name
      `;
      console.log('📋 Existing tables:', tables.map(t => t.table_name));
    } catch (err) {
      console.log('ℹ️  No tables found yet (expected for new database)');
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    if (error.code === 'P1001') {
      console.log('💡 Possible causes:');
      console.log('   - Wrong connection string');
      console.log('   - Firewall blocking connection');
      console.log('   - Neon database not active');
    }
    if (error.code === 'P2801') {
      console.log('💡 Authentication failed - check password in connection string');
    }
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();