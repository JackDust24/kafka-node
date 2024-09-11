import { WebSocketServer } from 'ws';

const socket1 = new WebSocketServer({ port: 8080 });
const socket2 = new WebSocketServer({ port: 8081 });

const startWebSocketServers = async () => {
  // socket1.on('connection', (ws) => {
  //     ws.on('message', (message) => {
  //         console.log(`Received message => ${message}`);
  //         ws.send('Hello! Message received');
  //     });
  // });

  socket1.on('connection', (ws) => {
    console.log('WebSocket server 1 connected');
  });

  socket1.on('error', (error) => {
    console.error('WebSocket server 1 error:', error);
  });

  socket2.on('connection', (ws) => {
    console.log('WebSocket server 2 connected');
  });

  socket2.on('error', (error) => {
    console.error('WebSocket server 2 error:', error);
  });
};

export { socket1, socket2, startWebSocketServers };
