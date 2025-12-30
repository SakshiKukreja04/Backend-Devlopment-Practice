const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log(req.url,req.method,req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome Home</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" placeholder="UserName" name="username"/>');
    res.write('<label for="male">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/> Male');
    res.write('<label for="female"></label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/> Female');
    res.write('<br><input type="submit" value="Submit"/>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'Sakshi Kukreja');
    res.statusCode = 302;
    res.setHeader('Location', '/');
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

