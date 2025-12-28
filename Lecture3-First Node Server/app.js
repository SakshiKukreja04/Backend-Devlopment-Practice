const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(req);
  console.log(req.url, req.method, req.headers);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

