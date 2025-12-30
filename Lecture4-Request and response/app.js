const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(req.url,req.method,req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>checkout our products</h1></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>404 error</h1></body>');
  res.write('</html>');
  res.end();
  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


