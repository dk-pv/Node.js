// const http = require('http');

// // Sample user data
// const users = [
//   { id: 1, name: "Rahul", email: "rahul@example.com" },
//   { id: 2, name: "Anjali", email: "anjali@example.com" }
// ];

// // Create server
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   // GET all users
//   if (method === 'GET' && url === '/api/users') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
//   }

//   // GET user by ID: /api/users/1
//   else if (method === 'GET' && url.startsWith('/api/users/')) {
//     const id = parseInt(url.split('/')[3]);
//     const user = users.find(u => u.id === id);

//     if (user) {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(user));
//     } else {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'User not found' }));
//     }
//   }

//   // Not Found
//   else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Route not found' }));
//   }
// });

// // Start server
// server.listen(3000, () => {
//   console.log('🚀 Server running at http://localhost:3000');
// });




const http = require('http');

const server = http.createServer((req, res) => {
  // Check if it's GET and URL is /hello
  if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from Node.js API!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('🚀 Server running ');
});
