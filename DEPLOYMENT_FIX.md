# Deployment Fix Guide

## Issues Fixed

### Backend Issues:
1. **Missing index.js**: Created `index.js` and `api/index.js` files to properly handle json-server with Vercel serverless functions
2. **Wrong vercel.json configuration**: Updated to point to the correct serverless function entry point
3. **CORS configuration**: Added proper CORS headers for cross-origin requests

### Frontend Issues:
1. **Removed unnecessary functions config**: Cleaned up vercel.json to focus on static site deployment
2. **Added root-level vercel.json**: Configured for monorepo structure

## Deployment Steps

### For Backend:
1. Deploy the backend folder to Vercel as a separate project
2. The API will be available at `https://your-backend-url.vercel.app/api/`
3. All json-server routes will work: `/users`, `/products`, etc.

### For Frontend:
1. Set environment variable in Vercel dashboard:
   - `VITE_API_BASE_URL` = `https://your-backend-url.vercel.app`
   - `VITE_ENVIRONMENT` = `production`
2. Deploy the frontend folder to Vercel as a separate project

### Alternative: Deploy as Monorepo
1. Deploy the entire project from root
2. Vercel will automatically detect and deploy both projects
3. Configure environment variables in each project's settings

## Testing
After deployment:
- Backend: Test at `https://your-backend-url.vercel.app/users`
- Frontend: Should connect to backend automatically

## Files Changed:
- ✅ `backend/index.js` - Created serverless function entry point
- ✅ `backend/api/index.js` - Created API handler for Vercel
- ✅ `backend/vercel.json` - Fixed configuration
- ✅ `backend/package.json` - Updated start script
- ✅ `frontend/vercel.json` - Cleaned up configuration
- ✅ `vercel.json` - Added root configuration for monorepo
