const jsonServer = require('json-server');
const path = require('path');

// Create server
const server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults({
  // Enable CORS for all origins
  noCors: false
});

server.use(middlewares);

// Add custom routes before JSON Server router
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

// Use default router
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Add custom middleware to handle CORS
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

server.use(router);

// Export for Vercel
module.exports = server;

// For local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}
