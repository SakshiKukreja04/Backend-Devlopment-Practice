import {sumRequestHandler} from './sum.js';

const requestHandlder = function(req,res){

  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Calculator Home</title></head>
        <body>
          <h1>Welcome to the Calculator</h1>
          <a href ="/calculator">Go to Calculator</a>
        </body>
      </html>`);
    res.end();
  }
  else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(
      `<html>
        <head><title>Calculator Page</title></head>
        <body>
          <h1>Calculator Page</h1>
          <form action="/calculate-result" method="POST">
            <input type="number" name="num1" placeholder="Enter first number" required/>
            <input type="number" name="num2" placeholder="Enter second number" required/>
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>
    `);
    res.end();
  }
  else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    return sumRequestHandler(req,res);
  }
}

export default requestHandlder;