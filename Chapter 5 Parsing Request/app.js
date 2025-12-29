const http = require('http');
const requestHandlder = require('./user');
const server = http.createServer(requestHandlder);


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})