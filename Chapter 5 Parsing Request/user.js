
const fs = require('fs');

const userRequestHandlder = (function(req, res) {
  console.log(req.url,req.method);

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
    
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    })

    req.on('end', () =>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);

      // const bodyObject = {};
      // for(const [key,value] of params.entries()){
      //   bodyObject[key] = value;
      // }

      const bodyObject = Object.fromEntries(params.entries());
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    }) 
    
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

module.exports = userRequestHandlder;



