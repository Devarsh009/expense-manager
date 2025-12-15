const { Pool } = require('pg');
require('dotenv').config();

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test connection
pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Create a wrapper that mimics mysql2's promise interface
// All queries should use PostgreSQL syntax ($1, $2, etc.) instead of MySQL (?)
const db = {
    // Query method (returns rows directly, not [rows])
    async query(sql, params = []) {
        try {
            const result = await pool.query(sql, params);
            return result.rows; // PostgreSQL returns {rows, rowCount}, we return just rows
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    },
    
    // Execute method (same as query for PostgreSQL)
    async execute(sql, params = []) {
        return this.query(sql, params);
    }
};

module.exports = db;
