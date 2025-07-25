# Vercel Deployment Guide for PRIME Frontend

## Prerequisites
1. Vercel account (https://vercel.com)
2. GitHub repository with your code
3. Backend API deployed (for production)

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from frontend directory:**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project? No
   - Project name: prime-frontend (or your choice)
   - Directory: ./
   - Override settings? No

### Option 2: Deploy via Vercel Dashboard

1. **Connect GitHub Repository:**
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` folder as root directory

2. **Configure Build Settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables:**
   ```
   VITE_API_BASE_URL=https://your-backend-url.vercel.app
   VITE_APP_TITLE=PRIME
   VITE_APP_VERSION=1.0.0
   VITE_ENVIRONMENT=production
   ```

## Backend Deployment (Required)

Since your frontend depends on a backend API, you need to deploy your backend first:

### Deploy Backend to Vercel:

1. **Create `vercel.json` in backend directory:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/"
       }
     ]
   }
   ```

2. **Update backend package.json:**
   ```json
   {
     "scripts": {
       "start": "json-server --watch db.json --port $PORT",
       "vercel-build": "echo 'Building for Vercel'"
     }
   }
   ```

## Environment Variables Setup

### Development (.env):
```bash
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=PRIME
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=development
```

### Production (Vercel Dashboard):
```bash
VITE_API_BASE_URL=https://your-backend-url.vercel.app
VITE_APP_TITLE=PRIME
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=production
```

## Testing Deployment

### Local Preview:
```bash
npm run build
npm run preview
```

### Check Production Build:
1. Verify all environment variables are set
2. Test API connectivity
3. Check for console errors
4. Verify 3D components load properly
5. Test routing (all pages should work with direct URLs)

## Troubleshooting

### Common Issues:

1. **API Not Working:**
   - Ensure backend is deployed and accessible
   - Check CORS settings on backend
   - Verify environment variables are set correctly

2. **3D Components Not Loading:**
   - Check for WebGL support
   - Verify Three.js bundles are loading correctly

3. **Build Failures:**
   - Clear node_modules and reinstall
   - Check for TypeScript errors
   - Verify all imports are correct

4. **Routing Issues:**
   - Ensure `vercel.json` rewrites are configured
   - Check `_redirects` file in public folder

### Performance Optimization:

1. **Bundle Analysis:**
   ```bash
   npm run build -- --analyze
   ```

2. **Optimize Assets:**
   - Compress images in public folder
   - Use appropriate image formats (WebP, AVIF)
   - Minimize 3D model sizes

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] API calls work in production
- [ ] 3D animations render properly
- [ ] Forms submit successfully
- [ ] Navigation works with direct URLs
- [ ] Performance is acceptable (< 3s load time)
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Error handling works properly

## Domain Configuration (Optional)

To use a custom domain:

1. **Add Domain in Vercel:**
   - Go to Project Settings > Domains
   - Add your custom domain

2. **Configure DNS:**
   - Add CNAME record pointing to vercel.app
   - Or add A record with Vercel's IP

3. **SSL Certificate:**
   - Vercel automatically provides SSL
   - No additional configuration needed

## Monitoring and Analytics

Consider adding:
- Vercel Analytics
- Error tracking (Sentry)
- Performance monitoring
- User analytics (Google Analytics)

For support, refer to:
- Vercel Documentation: https://vercel.com/docs
- Vite Deployment Guide: https://vitejs.dev/guide/build.html
