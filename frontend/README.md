# PRIME Frontend - React E-commerce Application

## 🎯 Overview

PRIME is a modern e-commerce web application frontend built for selling energy and hydration drinks. The application features an immersive 3D experience, smooth animations, and complete e-commerce functionality with user authentication, product management, and shopping cart features.

### Key Features
- **3D Interactive Experience** with Three.js and React Three Fiber
- **Smooth Animations** powered by Framer Motion and GSAP
- **Complete E-commerce Functionality** (Products, Cart, User Management)
- **Admin Panel** for product management
- **Responsive Design** with Tailwind CSS
- **State Management** with Redux Toolkit
- **Modern UI/UX** with custom animations and effects

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | Core UI framework |
| **Vite** | 7.0.4 | Build tool and dev server |
| **Redux Toolkit** | 2.8.2 | State management |
| **React Router** | router-dom 3.0.3 | Client-side routing |
| **Tailwind CSS** | 4.1.11 | Utility-first CSS framework |
| **Framer Motion** | 12.23.6 | Animation library |
| **GSAP** | 3.13.0 | Professional animation library |
| **Three.js** | 0.178.0 | 3D graphics library |
| **React Three Fiber** | 9.2.0 | React renderer for Three.js |
| **React Three Drei** | 10.5.1 | Useful helpers for React Three Fiber |
| **Axios** | 1.10.0 | HTTP client |
| **React Hook Form** | 7.60.0 | Form handling |
| **React Icons** | 5.5.0 | Icon library |
| **Matter.js** | 0.20.0 | 2D physics engine |
| **Lenis** | 1.3.8 | Smooth scrolling |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher (or yarn v1.22.0+)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start on `http://localhost:5173` with hot reloading enabled.

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Ballpit.jsx         # 3D ball physics simulation
│   ├── LandingPage.jsx     # Loading screen with animations
│   ├── Navbar.jsx          # Main navigation
│   ├── Menu.jsx            # Mobile navigation
│   ├── Showbottle.jsx      # Product showcase
│   ├── RotatingText.jsx    # Animated text effects
│   ├── VariableProximity.jsx # Mouse proximity effects
│   ├── ScrollStack.jsx     # Scroll-based animations
│   ├── FallingText.jsx     # Physics-based text animation
│   └── ...
├── Page/               # Page components
│   ├── Home.jsx           # Homepage
│   ├── Product.jsx        # Product listing
│   ├── Cart.jsx           # Shopping cart
│   ├── Login.jsx          # User authentication
│   ├── Register.jsx       # User registration
│   ├── admin/             # Admin-only pages
│   └── user/              # User profile pages
├── store/              # Redux store and state management
│   ├── store.jsx          # Store configuration
│   ├── actions/           # Action creators
│   └── reducers/          # Redux slices
├── api/                # API configuration
│   └── axiosconfig.jsx    # Axios instance
├── routes/             # React Router configuration
│   └── Mainrouter.jsx     # Main routing setup
└── assets/             # Static assets (fonts, images)
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the frontend directory:

```bash
# .env (Frontend)
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=PRIME
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=development

# For production builds
# VITE_API_BASE_URL=https://your-api-domain.com
```

---

## 🎨 Key Components

### 🎯 Interactive & Animation Components

#### 1. **Ballpit.jsx**
- Interactive 3D ball physics simulation
- Three.js-based 3D rendering with real-time physics
- Mouse interaction with balls

#### 2. **RotatingText.jsx**
- Animated text rotation with stagger effects
- Character-by-character animations
- Multiple rotation modes

#### 3. **VariableProximity.jsx**
- Mouse proximity-based font variation effects
- Real-time font weight changes based on cursor distance

#### 4. **ScrollStack.jsx**
- Advanced scroll-based card stacking effects
- Lenis smooth scrolling integration

#### 5. **FallingText.jsx**
- Physics-based text falling animation
- Matter.js physics integration with mouse interaction

### 🛒 E-commerce Components

#### 6. **Product.jsx**
- Product grid with animations
- Add to cart functionality
- Responsive card layout

#### 7. **Cart.jsx**
- Shopping cart management
- Quantity controls and real-time price calculation

### 🔐 Authentication Components

#### 8. **Login.jsx** & **Register.jsx**
- Form validation with React Hook Form
- GSAP entrance animations
- Error handling with visual feedback

---

## 🗄️ State Management

### Redux Store Structure
- **User State**: Authentication, profile management
- **Product State**: Product listings, details
- **Cart State**: Shopping cart items, quantities, totals

### Key Actions
- `asyncurrentuser()` - Load current user from localStorage
- `asynloginuser(user)` - Authenticate user
- `asynloadproduct()` - Load all products
- Cart management actions

---

## 🌐 API Integration

### Backend Configuration
```javascript
// axiosconfig.jsx
const instance = axios.create({
    baseURL: "http://localhost:3000/"
})
```

### Available Endpoints
- `GET /users` - Get all users
- `GET /products` - Get all products
- `POST /users` - User registration
- Authentication via query parameters

---

## 🎨 Design System

### Color Palette
- **Primary**: #00ff99 (Neon Green)
- **Background**: Black, White, Zinc variations
- **Text**: White, Black, Gray variations

### Typography
- Custom fonts loaded from assets
- `NormalidadExtended-Medium.ttf`
- Variable font support for proximity effects

### Animation Philosophy
- Staggered, smooth entrance animations
- Responsive micro-interactions
- Realistic physics for interactive elements
- Professional page transitions

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Testing
npm run test         # Run tests with Vitest
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
```

---

## 🏗️ Build Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    open: true,
    port: 5173,
  },
})
```

### Tailwind CSS
Custom configuration with PRIME branding colors and animations.

---

## 🚀 Deployment

### Quick Deployment to Vercel

1. **Frontend Deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy frontend
   cd frontend
   vercel
   ```

2. **Backend Deployment:**
   ```bash
   # Deploy backend API
   cd backend
   vercel
   ```

3. **Environment Variables:**
   Set these in your Vercel dashboard for production:
   ```bash
   VITE_API_BASE_URL=https://your-backend-url.vercel.app
   VITE_APP_TITLE=PRIME
   VITE_APP_VERSION=1.0.0
   VITE_ENVIRONMENT=production
   ```

### Manual Deployment via Vercel Dashboard

1. Connect your GitHub repository to Vercel
2. Select the `frontend` folder as the root directory
3. Configure build settings:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Set environment variables in the Vercel dashboard
5. Deploy!

### Production Build
```bash
npm run build
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Vercel Deployment
The project includes `vercel.json` configuration for easy deployment:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

---

## 🐛 Troubleshooting

### Common Issues

#### 3D Components Not Loading
Ensure WebGL is supported in your browser. Check console for WebGL-related errors.

#### Build Failures
If experiencing memory issues during build:
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### State Persistence Issues
Clear localStorage if experiencing Redux state issues:
```javascript
localStorage.clear()
```

---

## 🔧 Development Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### Browser Requirements
- **WebGL Support**: Required for 3D components
- **Modern JavaScript**: ES2020+ features
- **CSS Custom Properties**: For dynamic styling

---

## 📞 Support

For issues and questions:
1. Check this README and main documentation
2. Create GitHub issues with detailed descriptions
3. Contact the development team

---

## 📄 License

This project is developed for educational and demonstration purposes. Please ensure proper licensing for any commercial use.
