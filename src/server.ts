import { createServer, Server } from 'http';
import { app } from './app';

const server: Server = createServer(app);

server.listen(3000, () => {
  console.log('Server TypeScipt running in port 3000');
});
