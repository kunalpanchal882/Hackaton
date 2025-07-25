#!/usr/bin/env node

const semver = require('semver');
const fs = require('fs');
const path = require('path');

// Read package.json to get required Node.js version
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const requiredNodeVersion = packageJson.engines?.node;

if (!requiredNodeVersion) {
  console.log('No Node.js version requirement specified in package.json');
  process.exit(0);
}

const currentNodeVersion = process.version;

console.log(`Current Node.js version: ${currentNodeVersion}`);
console.log(`Required Node.js version: ${requiredNodeVersion}`);

if (!semver.satisfies(currentNodeVersion, requiredNodeVersion)) {
  console.error('\n❌ ERROR: Node.js version mismatch!');
  console.error(`Current version: ${currentNodeVersion}`);
  console.error(`Required version: ${requiredNodeVersion}`);
  console.error('\nTo fix this issue:');
  
  // Check if .nvmrc exists
  if (fs.existsSync(path.join(__dirname, '.nvmrc'))) {
    const nvmrcVersion = fs.readFileSync(path.join(__dirname, '.nvmrc'), 'utf8').trim();
    console.error(`1. Use nvm to switch to the correct version: nvm use ${nvmrcVersion}`);
    console.error('2. Or run: nvm use (if you have .nvmrc file)');
  } else {
    console.error('1. Install the required Node.js version using nvm:');
    console.error(`   nvm install ${requiredNodeVersion.replace('>=', '')}`);
    console.error(`   nvm use ${requiredNodeVersion.replace('>=', '')}`);
  }
  
  console.error('3. Then run npm start again');
  process.exit(1);
}

console.log('✅ Node.js version is compatible!');
