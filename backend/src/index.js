import express from 'express';
import consumerRun from './consumer.js';

import {
  socket1,
  socket2,
  startWebSocketServers,
} from './service/websocket.js';
import adminInit from './admin.js';

const PORT = process.env.PORT || 8000;
const app = express();

const init = async () => {
  await adminInit();
  await startWebSocketServers();
  await consumerRun('realtime-data', 'jason-topic', socket1);
  await consumerRun('realtime-data', 'jason-topic', socket2);
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  init();
});
