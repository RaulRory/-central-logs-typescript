import { createServer, Server } from "http";

const server: Server =  createServer();

server.listen(3000, () => {
console.log('Server TypeScipt running in port 3000')
})
