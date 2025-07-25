# PRIME Backend - JSON Server API

## 🎯 Overview

This backend provides a REST API for the PRIME e-commerce application using JSON Server. It handles user authentication, product management, and shopping cart functionality with a simple file-based database.

### Key Features
- **REST API** endpoints for users, products, and orders
- **JSON Server** for rapid prototyping and development
- **CORS Support** for cross-origin requests
- **Authentication** simulation via query parameters
- **Admin Panel Support** with role-based access
- **Shopping Cart** persistence

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **JSON Server** | 1.0.0-beta.3 | Mock REST API server |
| **Node.js** | 16.0.0+ | Runtime environment |

---

## 🚀 Quick Setup

### Prerequisites
- **Node.js**: v16.0.0 or higher (required for JSON Server)
- **npm**: v7.0.0 or higher

### Option 1: Automated Setup (Recommended)
```bash
./setup.sh
```

### Option 2: Manual Setup

1. **Check Node.js version requirements:**
   ```bash
   node --version  # Should be 16.0.0 or higher
   ```

2. **If you have nvm installed and see a .nvmrc file:**
   ```bash
   nvm use
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Fix permissions (if needed):**
   ```bash
   chmod +x node_modules/.bin/json-server
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

---

## 🗄️ Database Structure

### JSON Database Schema (db.json)

```json
{
  "users": [
    {
      "id": "unique_id",
      "username": "string",
      "email": "string",
      "password": "string",
      "isAdmin": boolean,
      "cart": [
        {
          "product": { /* product object */ },
          "quantity": number
        }
      ]
    }
  ],
  "products": [
    {
      "id": "unique_id",
      "title": "string",
      "price": number,
      "description": "string",
      "category": "string",
      "image": "string",
      "catogory": "string"
    }
  ],
  "orders": [],
  "categories": [
    {
      "id": "unique_id",
      "name": "string",
      "slug": "string",
      "description": "string"
    }
  ]
}
```

### Sample Data

#### Default Admin User
```json
{
  "id": "admin-001",
  "username": "admin",
  "email": "admin@prime.com",
  "password": "admin123",
  "isAdmin": true,
  "cart": []
}
```

#### Sample Product
```json
{
  "id": "prod-001",
  "title": "Prime Energy - Blue Raspberry",
  "price": 109.95,
  "description": "Premium energy drink with natural flavors and essential vitamins.",
  "category": "energy",
  "image": "https://example.com/blue-raspberry.png",
  "catogory": "energy-drink",
  "stock": 100,
  "featured": true
}
```

---

## 🌐 API Endpoints

### Base URL
```
http://localhost:3000
```

### User Endpoints
```
GET    /users                    # Get all users
GET    /users/:id                # Get user by ID
POST   /users                    # Create new user (registration)
PATCH  /users/:id                # Update user profile
DELETE /users/:id                # Delete user account
GET    /users?email=X&password=Y # Login authentication
```

### Product Endpoints
```
GET    /products                 # Get all products
GET    /products/:id             # Get product by ID
POST   /products                 # Create new product (admin only)
PATCH  /products/:id             # Update product (admin only)
DELETE /products/:id             # Delete product (admin only)
GET    /products?category=X      # Filter products by category
```

### Category Endpoints
```
GET    /categories               # Get all categories
GET    /categories/:id           # Get category by ID
POST   /categories               # Create new category (admin only)
```

### Order Endpoints
```
GET    /orders                   # Get all orders (admin only)
GET    /orders/:id               # Get order by ID
POST   /orders                   # Create new order
```

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:

```bash
# .env (Backend)
PORT=3000
NODE_ENV=development
HOST=localhost

# For production
# NODE_ENV=production
# HOST=0.0.0.0
```

### Custom Server Configuration
For advanced features, you can create a custom `server.js`:

```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(middlewares);

// Custom routes
server.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
```

---

## 🏃 Running the Server

### Development Mode
```bash
npm start
```

The server will start on `http://localhost:3000` with the following features:
- Auto-watch for `db.json` changes
- CORS enabled for all origins
- RESTful API endpoints
- Hot reloading

### Production Mode
```bash
NODE_ENV=production npm start
```

### Using Custom Server
```bash
node server.js
```

---

## 🧪 API Testing

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Get All Products
```bash
curl http://localhost:3000/products
```

### User Authentication (Login)
```bash
curl "http://localhost:3000/users?email=admin@prime.com&password=admin123"
```

### Create New Product (POST)
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Prime Hydration - Tropical Punch",
    "price": 89.95,
    "description": "Refreshing hydration drink with tropical flavors",
    "category": "hydration",
    "image": "https://example.com/tropical-punch.png"
  }'
```

### Update Product (PATCH)
```bash
curl -X PATCH http://localhost:3000/products/prod-001 \
  -H "Content-Type: application/json" \
  -d '{"price": 99.95}'
```

---

## 📊 Database Management

### Backup Database
```bash
# Manual backup
cp db.json "backups/db_backup_$(date +%Y%m%d_%H%M%S).json"

# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"
DB_FILE="./db.json"

mkdir -p $BACKUP_DIR
cp $DB_FILE "$BACKUP_DIR/db_backup_$DATE.json"

# Keep only last 30 backups
ls -t $BACKUP_DIR/db_backup_*.json | tail -n +31 | xargs rm -f
```

### Reset Database
```bash
# Reset to initial state
cp db.json.template db.json
```

### Database Initialization
Create initialization script `scripts/init-db.js`:

```javascript
const fs = require('fs');
const path = require('path');

const initialData = {
  users: [
    {
      id: "admin-001",
      username: "admin",
      email: "admin@prime.com",
      password: "admin123",
      isAdmin: true,
      cart: []
    }
  ],
  products: [],
  orders: [],
  categories: []
};

const dbPath = path.join(__dirname, '../db.json');
fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
console.log('Database initialized successfully!');
```

Run with:
```bash
node scripts/init-db.js
```

---

## 🐛 Troubleshooting

### Node.js Version Requirements

This project requires Node.js 16+ because:
- json-server 1.0.0-beta.3 uses modern JavaScript features
- The `||=` operator requires Node.js 15+
- For best compatibility, we recommend Node.js 16+

### Common Issues & Solutions

#### Permission Denied Error
```bash
chmod +x node_modules/.bin/json-server
```

#### Node.js Version Error
```bash
# Install the correct version using nvm
nvm install 20.19.4
nvm use 20.19.4
```

#### Port Already in Use
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

#### CORS Issues
Add CORS headers to your custom server configuration:
```javascript
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
```

#### Starting Fresh
```bash
rm -rf node_modules package-lock.json
./setup.sh
```

---

## 🔐 Security Considerations

### Development Environment
- Passwords are stored in plain text (development only)
- No JWT authentication (simplified for prototyping)
- CORS enabled for all origins

### Production Recommendations
- Implement proper password hashing (bcrypt)
- Add JWT token authentication
- Restrict CORS to specific domains
- Add input validation and sanitization
- Implement rate limiting
- Use HTTPS

---

## 📈 Performance & Monitoring

### Health Check Endpoint
```javascript
server.get('/api/health', (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version || '1.0.0'
  };
  res.status(200).json(health);
});
```

### Logging
```javascript
// Simple request logging
server.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
```

---

## 🚀 Deployment Options

### Option 1: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway deploy
```

### Option 2: Heroku
```bash
# Create Procfile
echo "web: node server.js" > Procfile

# Deploy to Heroku
heroku create prime-backend-api
git push heroku main
```

### Option 3: Vercel Serverless Functions
Create `api/index.js`:
```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

module.exports = server;
```

---

## 🔧 Development

### Watch Mode
The server automatically watches `db.json` for changes and reloads data.

### Adding Custom Routes
```javascript
// Custom authentication route
server.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Custom login logic
});

// Custom product search
server.get('/api/search/products', (req, res) => {
  const { q } = req.query;
  // Custom search logic
});
```

### Middleware
```javascript
// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  next();
};

// Use middleware
server.use('/api/admin/*', authenticate);
```

---

## 📝 Available Scripts

```bash
npm start          # Start JSON Server (port 3000)
npm test          # Run tests (placeholder)
npm run dev       # Start with nodemon (if configured)
npm run backup    # Backup database (if script exists)
```

---

## 📞 Support & Maintenance

### Regular Tasks
- **Daily**: Monitor server logs and health
- **Weekly**: Backup database, review API usage
- **Monthly**: Update dependencies, security audit

### Getting Help
1. Check this README and troubleshooting section
2. Review JSON Server documentation
3. Create GitHub issues for bugs
4. Contact development team

---

## 📄 License

This project is developed for educational and demonstration purposes. Please ensure proper licensing for any commercial use.

---

**Last Updated**: January 2025  
**JSON Server Version**: 1.0.0-beta.3  
**Node.js Requirement**: 16.0.0+
