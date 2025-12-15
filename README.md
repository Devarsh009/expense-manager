# 💰 Personal Expense Manager

A comprehensive web-based personal finance management application built with Node.js and PostgreSQL. Track your income, expenses, budgets, and generate detailed financial reports with beautiful visualizations.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue)
![Express](https://img.shields.io/badge/Express-4.21-black)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 📊 Dashboard
- **Real-time Financial Overview**: View total income, expenses, and balance at a glance
- **Transaction History**: Complete list of all your financial transactions
- **Date Filtering**: Filter transactions by custom date ranges
- **Visual Cards**: Beautiful, color-coded cards for quick financial insights

### 💵 Transaction Management
- **Add Transactions**: Record income and expenses with detailed information
- **Categorization**: Organize transactions into 17+ predefined categories
- **Transaction Details**: Include date, amount, description, and category for each transaction
- **Quick Entry**: Streamlined form for fast transaction entry

### 📈 Financial Summary
- **Category Breakdown**: Visual pie chart showing expense distribution by category
- **Budget vs Actual**: Bar chart comparing budgeted amounts with actual spending
- **Monthly Analysis**: Filter and analyze spending patterns by month
- **Interactive Charts**: Powered by Chart.js for beautiful data visualization

### 💼 Budget Planning
- **Set Monthly Budgets**: Create budgets for different categories per month
- **Budget Tracking**: Monitor spending against your set budgets
- **Progress Indicators**: Visual progress bars showing budget utilization
- **Budget Alerts**: Color-coded warnings when approaching budget limits

### 📋 Financial Reports
- **Monthly Reports**: Comprehensive monthly financial summaries
- **Yearly Reports**: Annual trends and analysis
- **Custom Date Range**: Generate reports for any date range
- **Expense Distribution**: Detailed breakdown of spending by category
- **Transaction Lists**: Complete transaction history for selected periods

### 👤 User Management
- **Secure Authentication**: Password-protected accounts with bcrypt hashing
- **User Profiles**: Manage your name and email
- **Password Management**: Change password securely
- **Session Management**: Secure session-based authentication

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, intuitive interface built with Bootstrap 5
- **Sidebar Navigation**: Easy access to all features
- **Flash Messages**: User-friendly success and error notifications

## 🛠️ Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **PostgreSQL**: Relational database (hosted on NeonDB)
- **Passport.js**: Authentication middleware
- **bcryptjs**: Password hashing
- **express-session**: Session management

### Frontend
- **EJS**: Embedded JavaScript templating
- **Bootstrap 5**: CSS framework for responsive design
- **Chart.js**: Data visualization library
- **Font Awesome**: Icon library
- **Custom CSS**: Styled components and animations

### Database
- **PostgreSQL 17+**: Modern relational database
- **NeonDB**: Serverless PostgreSQL hosting
- **Connection Pooling**: Efficient database connections

## 🚀 Live Demo

Visit the live application: [expense-manager-nine-henna.vercel.app](https://expense-manager-nine-henna.vercel.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **PostgreSQL Database** (or NeonDB account)
- **Git** (for cloning the repository)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Devarsh009/expense-manager.git
cd expense-manager
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- express
- pg (PostgreSQL client)
- passport
- bcryptjs
- ejs
- chart.js
- and more...

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
NODE_ENV=development
```

**For NeonDB:**
1. Sign up at [NeonDB](https://neon.tech)
2. Create a new project and database
3. Copy your connection string from the dashboard
4. Add it to your `.env` file as `DATABASE_URL`

### 4. Set Up Database

#### Option A: Using the Setup Script (Recommended)

```bash
node setup-database.js
```

This will automatically create all required tables and indexes.

#### Option B: Manual Setup

1. Open your NeonDB SQL Editor (or any PostgreSQL client)
2. Copy and paste the contents of `schema.sql`
3. Execute the SQL script

### 5. Verify Database Connection

Test your database connection:

```bash
node test-connection.js
```

You should see:
```
✅ Connection successful!
✅ All required tables exist!
✅ ALL TESTS PASSED!
```

### 6. Start the Server

```bash
node app.js
```

The server will start on `http://localhost:3001`

## 📁 Project Structure

```
expense-manager/
├── app.js                 # Main application file
├── db.js                  # Database connection and configuration
├── package.json           # Project dependencies
├── schema.sql            # Database schema
├── .env                  # Environment variables (not in git)
├── .gitignore           # Git ignore rules
│
├── views/               # EJS templates
│   ├── layouts/
│   │   └── layout.ejs  # Main layout template
│   ├── partials/       # Reusable components
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── index.ejs        # Dashboard
│   ├── login.ejs       # Login page
│   ├── signup.ejs      # Sign up page
│   ├── addtransaction.ejs
│   ├── summary.ejs     # Financial summary
│   ├── budget.ejs     # Budget planning
│   ├── reports.ejs    # Financial reports
│   ├── settings.ejs   # User settings
│   └── about.ejs     # About page
│
├── public/            # Static files
│   └── css/
│       └── custom.css # Custom styles
│
└── scripts/          # Utility scripts
    ├── setup-database.js    # Database setup script
    └── test-connection.js   # Connection test script
```

## 🔌 API Endpoints

### Authentication
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /signup` - Sign up page
- `POST /signup` - Register new user
- `GET /logout` - Logout user

### Dashboard & Transactions
- `GET /` - Dashboard (protected)
- `GET /add` - Add transaction page (protected)
- `POST /add` - Create new transaction (protected)

### Financial Analysis
- `GET /summary` - Financial summary with charts (protected)
- `GET /reports` - Reports page (protected)
- `POST /api/reports` - Generate report data (protected)

### Budget Management
- `GET /budget` - Budget planning page (protected)
- `POST /budget/set` - Set/update budget (protected)
- `GET /api/budget-data` - Get budget data API (protected)

### User Settings
- `GET /settings` - Settings page (protected)
- `POST /settings/profile` - Update profile (protected)
- `POST /settings/password` - Change password (protected)

### Other Pages
- `GET /about` - About page (protected)
- `GET /careers` - Careers page

## 🎯 Usage Guide

### Getting Started

1. **Sign Up**: Create a new account with your email and password
2. **Login**: Access your dashboard
3. **Add Transactions**: Start tracking your income and expenses
4. **Set Budgets**: Create monthly budgets for different categories
5. **View Reports**: Generate detailed financial reports

### Adding a Transaction

1. Click "Add Transaction" in the sidebar
2. Select transaction type (Income or Expense)
3. Enter amount, date, description, and category
4. Click "Add Transaction"
5. View it on your dashboard

### Setting a Budget

1. Navigate to "Budget Planning"
2. Select a category from the dropdown
3. Enter the budget amount
4. Select the month and year
5. Click "Set Budget"
6. Monitor your progress on the budget page

### Generating Reports

1. Go to "Reports"
2. Select report type:
   - **Monthly**: Select a specific month
   - **Yearly**: Select a year
   - **Date Range**: Select start and end dates
3. Click "Generate Report"
4. View detailed analysis and charts

## 🗄️ Database Schema

### Users Table
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR)
- `email` (VARCHAR, UNIQUE)
- `password` (VARCHAR, hashed)
- `created_at` (TIMESTAMP)

### Transactions Table
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INTEGER, FOREIGN KEY)
- `type` (VARCHAR: 'income' or 'expense')
- `amount` (DECIMAL)
- `date` (DATE)
- `description` (TEXT)
- `category` (VARCHAR)
- `created_at` (TIMESTAMP)

### Budgets Table
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INTEGER, FOREIGN KEY)
- `category` (VARCHAR)
- `amount` (DECIMAL)
- `month` (INTEGER: 1-12)
- `year` (INTEGER)
- `created_at` (TIMESTAMP)
- UNIQUE constraint on (user_id, category, month, year)

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **Session Management**: Secure session-based authentication
- **SQL Injection Protection**: Parameterized queries
- **Route Protection**: Authentication middleware for protected routes
- **Environment Variables**: Sensitive data stored in `.env` file

## 🧪 Testing

### Test Database Connection

```bash
node test-connection.js
```

This will verify:
- ✅ Database connectivity
- ✅ Table existence
- ✅ Table structure
- ✅ Write operations

### Manual Testing Checklist

- [ ] User registration
- [ ] User login/logout
- [ ] Add income transaction
- [ ] Add expense transaction
- [ ] View dashboard
- [ ] Filter transactions by date
- [ ] View summary with charts
- [ ] Set budget
- [ ] Generate monthly report
- [ ] Generate yearly report
- [ ] Update profile
- [ ] Change password

## 🐛 Troubleshooting

### Common Issues

**Issue**: `Cannot find module 'pg'`
- **Solution**: Run `npm install`

**Issue**: `ECONNREFUSED` or connection errors
- **Solution**: 
  - Verify `.env` file exists with correct `DATABASE_URL`
  - Check NeonDB database is not paused
  - Verify internet connection

**Issue**: `relation 'users' does not exist`
- **Solution**: Run `node setup-database.js`

**Issue**: Internal Server Error after login
- **Solution**:
  - Check server console for error messages
  - Verify all tables exist: `node test-connection.js`
  - Check database connection

**Issue**: Port 3001 already in use
- **Solution**: Change port in `app.js` or kill the process using port 3001

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Devarsh**

- GitHub: [@Devarsh009](https://github.com/Devarsh009)
- Project Link: [https://github.com/Devarsh009/expense-manager](https://github.com/Devarsh009/expense-manager)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Chart.js](https://www.chartjs.org/) - Chart library
- [NeonDB](https://neon.tech/) - PostgreSQL hosting
- [Passport.js](http://www.passportjs.org/) - Authentication

## 📊 Project Status

✅ **Active Development** - The project is actively maintained and updated.

## 🗺️ Roadmap

Future enhancements planned:
- [ ] Export reports to PDF
- [ ] Email notifications for budget alerts
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Mobile app
- [ ] Data export/import
- [ ] Advanced analytics

---

⭐ If you find this project helpful, please give it a star on GitHub!

