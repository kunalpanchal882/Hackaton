#!/bin/bash

# Setup script for the backend
set -e

echo "🚀 Setting up backend environment..."

# Check if nvm is installed
if ! command -v nvm &> /dev/null; then
    echo "❌ nvm is not installed. Please install nvm first:"
    echo "   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash"
    echo "   Then restart your terminal and run this script again."
    exit 1
fi

# Check if .nvmrc exists
if [ -f ".nvmrc" ]; then
    echo "📋 Found .nvmrc file"
    NODE_VERSION=$(cat .nvmrc)
    echo "📋 Required Node.js version: $NODE_VERSION"
    
    # Install and use the correct Node.js version
    echo "📦 Installing Node.js $NODE_VERSION..."
    nvm install "$NODE_VERSION"
    nvm use "$NODE_VERSION"
    
    echo "✅ Switched to Node.js $(node --version)"
else
    echo "⚠️  No .nvmrc file found"
fi

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Fix permissions for json-server
echo "🔧 Fixing json-server permissions..."
if [ -f "node_modules/.bin/json-server" ]; then
    chmod +x node_modules/.bin/json-server
    echo "✅ json-server permissions fixed"
else
    echo "⚠️  json-server not found in node_modules/.bin/"
fi

echo "🎉 Setup complete! You can now run:"
echo "   npm start"
