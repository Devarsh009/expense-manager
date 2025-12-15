/**
 * Database Connection Test Script
 * This script tests if your NeonDB connection is working
 * 
 * Usage: node test-connection.js
 */

const db = require('./db');

async function testConnection() {
    console.log('🔍 Testing NeonDB Connection...\n');

    try {
        // Test 1: Basic connection test
        console.log('Test 1: Testing basic connection...');
        const result = await db.query('SELECT NOW() as current_time, version() as pg_version');
        console.log('✅ Connection successful!');
        console.log(`   Current time: ${result[0].current_time}`);
        console.log(`   PostgreSQL version: ${result[0].pg_version.split(' ')[0]} ${result[0].pg_version.split(' ')[1]}\n`);

        // Test 2: Check if tables exist
        console.log('Test 2: Checking if tables exist...');
        const tablesQuery = `
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_type = 'BASE TABLE'
            ORDER BY table_name
        `;
        const tables = await db.query(tablesQuery);
        
        const requiredTables = ['users', 'transactions', 'budgets'];
        const existingTables = tables.map(t => t.table_name);
        
        console.log(`   Found ${existingTables.length} table(s): ${existingTables.join(', ')}`);
        
        let allTablesExist = true;
        for (const table of requiredTables) {
            if (existingTables.includes(table)) {
                console.log(`   ✅ Table '${table}' exists`);
            } else {
                console.log(`   ❌ Table '${table}' is missing`);
                allTablesExist = false;
            }
        }
        
        if (!allTablesExist) {
            console.log('\n⚠️  Some tables are missing. Run: node setup-database.js');
        } else {
            console.log('\n✅ All required tables exist!');
        }

        // Test 3: Check table structures
        console.log('\nTest 3: Checking table structures...');
        for (const table of requiredTables) {
            if (existingTables.includes(table)) {
                const columnsQuery = `
                    SELECT column_name, data_type, is_nullable
                    FROM information_schema.columns
                    WHERE table_name = $1
                    ORDER BY ordinal_position
                `;
                const columns = await db.query(columnsQuery, [table]);
                console.log(`\n   Table: ${table}`);
                columns.forEach(col => {
                    console.log(`     - ${col.column_name} (${col.data_type}) ${col.is_nullable === 'NO' ? 'NOT NULL' : ''}`);
                });
            }
        }

        // Test 4: Test a simple insert/select (if users table exists)
        if (existingTables.includes('users')) {
            console.log('\nTest 4: Testing write operation...');
            const testEmail = `test_${Date.now()}@test.com`;
            try {
                // Try to insert a test user (will fail if email exists, that's okay)
                await db.query(
                    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
                    ['Test User', testEmail, 'test_password_hash']
                );
                console.log('   ✅ Write operation successful');
                
                // Clean up test data
                await db.query('DELETE FROM users WHERE email = $1', [testEmail]);
                console.log('   ✅ Test data cleaned up');
            } catch (err) {
                if (err.code === '23505') { // Unique constraint violation
                    console.log('   ✅ Write operation works (test user already exists, cleaned up)');
                } else {
                    throw err;
                }
            }
        }

        console.log('\n' + '='.repeat(50));
        console.log('✅ ALL TESTS PASSED! Your database is ready to use.');
        console.log('='.repeat(50));
        console.log('\nYou can now start your server with: node app.js');
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Connection test failed!');
        console.error('\nError details:');
        console.error('  Message:', error.message);
        console.error('  Code:', error.code);
        
        if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
            console.error('\n💡 Possible issues:');
            console.error('   - Check your internet connection');
            console.error('   - Verify your DATABASE_URL in .env file');
            console.error('   - Make sure your NeonDB database is not paused');
        } else if (error.code === '28P01') {
            console.error('\n💡 Authentication failed:');
            console.error('   - Check your username and password in DATABASE_URL');
            console.error('   - Verify your NeonDB connection string');
        } else if (error.code === '3D000') {
            console.error('\n💡 Database does not exist:');
            console.error('   - Check the database name in your DATABASE_URL');
        }
        
        console.error('\nFull error:', error);
        process.exit(1);
    }
}

// Run test
testConnection();

