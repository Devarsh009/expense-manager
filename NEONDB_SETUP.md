# NeonDB PostgreSQL Setup Guide

## Step 1: Create a NeonDB Account and Database

1. Go to [NeonDB](https://neon.tech) and sign up for a free account
2. Create a new project
3. Create a new database (or use the default one)
4. Copy your connection string from the dashboard

## Step 2: Get Your Connection String

Your NeonDB connection string will look like this:
```
postgresql://username:password@ep-xxxxx.us-east-2.aws.neon.tech/dbname?sslmode=require
```

**Copy this connection string** - you'll need it in the next step.

## Step 3: Set Up Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example` if it exists)
2. Add your NeonDB connection string:

```env
DATABASE_URL=postgresql://username:password@ep-xxxxx.us-east-2.aws.neon.tech/dbname?sslmode=require
NODE_ENV=development
```

**⚠️ IMPORTANT:** Never commit your `.env` file to git! It contains sensitive credentials.

## Step 4: Create Database Tables

1. Go to your NeonDB dashboard
2. Open the SQL Editor
3. Copy and paste the contents of `schema.sql` file
4. Run the SQL to create all required tables:
   - `users` - for user accounts
   - `transactions` - for income/expense records
   - `budgets` - for budget planning

## Step 5: Install Dependencies

Run this command to install PostgreSQL driver:
```bash
npm install
```

This will install `pg` (PostgreSQL client) instead of `mysql2`.

## Step 6: Test the Connection

Start your server:
```bash
node app.js
```

You should see: `Connected to PostgreSQL database` in the console.

## Troubleshooting

### Connection Issues
- Make sure your `.env` file has the correct `DATABASE_URL`
- Check that your NeonDB database is active (not paused)
- Verify SSL mode is set correctly (`sslmode=require`)

### Table Errors
- Make sure you've run the `schema.sql` file in your NeonDB SQL editor
- Check that all tables exist: `users`, `transactions`, `budgets`

### Authentication Errors
- Verify your username and password in the connection string
- Make sure your NeonDB project is not paused

## Need Help?

If you encounter any issues:
1. Check the console logs for error messages
2. Verify your `.env` file is in the root directory
3. Ensure all tables are created using `schema.sql`
4. Check that your NeonDB database is accessible

