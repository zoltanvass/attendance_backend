require('dotenv').config();
const http = require('http');
const server = http.createServer();
const app = require('./index');
http.createServer(app);
server.listen(process.env.DB_PORT);

