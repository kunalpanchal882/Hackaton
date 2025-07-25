const jsonServer = require('json-server');
const path = require('path');

// Create server
const server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults({
  noCors: false
});

server.use(middlewares);

// Add CORS headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Use default router
const router = jsonServer.router(path.join(__dirname, '../db.json'));

server.use('/api', router);

// Export handler for Vercel
module.exports = (req, res) => {
  // Handle the request with json-server
  server(req, res);
};
