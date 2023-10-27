/* 
   File: sophisticated_code.js
   
   Description: This code demonstrates a sophisticated and complex implementation
                of a real-time chat application using JavaScript and Node.js.
                It utilizes various advanced concepts like asynchronous programming,
                event-driven architecture, and WebSocket communication.
*/

// Import required modules
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Serve the chat client HTML page
  if (req.url === '/') {
    fs.readFile('chat.html', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading chat.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Store connected clients
let clients = {};

// Handle new WebSocket connections
wss.on('connection', (ws) => {
  // Generate a unique id for the new client
  const clientId = generateClientId();

  // Add the client to the clients object
  clients[clientId] = ws;

  // Send a welcome message to the new client
  ws.send(JSON.stringify({ type: 'info', message: 'Welcome to the chat!' }));

  // Broadcast a user joined message to all clients
  broadcast(JSON.stringify({ type: 'info', message: `User ${clientId} joined the chat.` }));

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);

    // Broadcast the received message to all clients
    broadcast(JSON.stringify({ type: 'message', sender: clientId, text: parsedMessage.text }));
  });

  // Handle client disconnection
  ws.on('close', () => {
    // Remove the client from the clients object
    delete clients[clientId];

    // Broadcast a user left message to all clients
    broadcast(JSON.stringify({ type: 'info', message: `User ${clientId} left the chat.` }));
  });
});

// Broadcast a message to all connected clients
function broadcast(message) {
  Object.values(clients).forEach((client) => {
    client.send(message);
  });
}

// Generate a unique client id
function generateClientId() {
  return Math.random().toString(36).substr(2, 9);
}

// Start the HTTP server
server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});