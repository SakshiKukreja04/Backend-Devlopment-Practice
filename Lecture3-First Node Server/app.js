const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(req);
  process.exit();//stops event loop after first request
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

