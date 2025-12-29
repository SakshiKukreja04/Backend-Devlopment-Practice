const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
  console.log(req.url,req.method,req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Practice Page</title></head>');
    res.write('<nav><ul><li> <a href="http://localhost:3000/">Home Page</a></li> <li> <a href="http://localhost:3000/men">Men Page</a></li> <li> <a href="http://localhost:3000/women">Women Page</a></li></ul></nav>');
    res.write('</html>');
    return res.end();
  }
  if(req.url === '/men'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Men Page</title></head>');
    res.write('<body><h1>This is Men Page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  if(req.url === '/women'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Women Page</title></head>');
    res.write('<body><h1>This is Women Page</h1></body>');
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
})