# Quick Test Guide

## How to Check if Everything is Working

### Step 1: Test Database Connection
```bash
node test-connection.js
```

This will check:
- ✅ Database connection
- ✅ Tables exist (users, transactions, budgets)
- ✅ Table structures are correct
- ✅ Write operations work

**Expected Output:**
```
🔍 Testing NeonDB Connection...

Test 1: Testing basic connection...
✅ Connection successful!
   Current time: 2024-01-15 10:30:45
   PostgreSQL version: PostgreSQL 15.0

Test 2: Checking if tables exist...
   Found 3 table(s): budgets, transactions, users
   ✅ Table 'users' exists
   ✅ Table 'transactions' exists
   ✅ Table 'budgets' exists

✅ ALL TESTS PASSED! Your database is ready to use.
```

### Step 2: Start the Server
```bash
node app.js
```

**Expected Output:**
```
Connected to PostgreSQL database
Server running on http://localhost:3001
```

### Step 3: Test the Application

1. **Open your browser:** http://localhost:3001

2. **Test Sign Up:**
   - Click "Sign Up"
   - Create a test account
   - Should redirect to login page

3. **Test Login:**
   - Login with your test account
   - Should redirect to dashboard

4. **Test Dashboard:**
   - Should show empty dashboard (no transactions yet)
   - Should NOT show "Internal Server Error"

5. **Test Add Transaction:**
   - Click "Add Transaction"
   - Fill in the form
   - Submit
   - Should redirect back to dashboard with your transaction

### Common Issues

#### ❌ "Cannot find module 'pg'"
**Solution:** Run `npm install`

#### ❌ "Connection refused" or "ENOTFOUND"
**Solution:** 
- Check your `.env` file has correct DATABASE_URL
- Make sure NeonDB database is not paused
- Check internet connection

#### ❌ "relation 'users' does not exist"
**Solution:** Run `node setup-database.js`

#### ❌ "Internal Server Error" after login
**Solution:** 
- Check server console for error messages
- Verify all tables exist: `node test-connection.js`
- Check database connection: `node test-connection.js`

### Quick Commands Reference

```bash
# Test database connection
node test-connection.js

# Setup database tables
node setup-database.js

# Start the server
node app.js

# Install dependencies
npm install
```

