const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

