import { createServer } from 'node:http';
import fs from "fs"

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream("/Users/edsonvs/Desktop/VScode/JS/Game/app.html").pipe(res)
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

