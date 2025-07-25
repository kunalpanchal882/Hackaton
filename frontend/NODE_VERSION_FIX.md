# Node.js Version Issue

Your current Node.js version is v14.19.1, but this project requires Node.js v16+ (specified in .nvmrc as v20.19.4).

## Fix Options:

### Option 1: Use NVM to switch versions (Recommended)
```bash
# Install the required version
nvm install 20.19.4

# Use the required version
nvm use 20.19.4

# Set as default (optional)
nvm alias default 20.19.4
```

### Option 2: Update Node.js directly
Download and install Node.js v18+ from https://nodejs.org

### Option 3: Use the version specified in .nvmrc
```bash
nvm use
```

After switching to the correct Node version, try building again:
```bash
npm run build
```

## For Vercel Deployment:
Vercel automatically uses the correct Node version based on your .nvmrc file, so this won't be an issue in production.
