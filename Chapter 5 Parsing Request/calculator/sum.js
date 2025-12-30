const sumRequestHandler = (req,res) => {
  console.log('Sum request handler called',req.url);
  const body = [];
  req.on('data',(chunk)=>{body.push(chunk);})
  req.on('end' ,()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);
    console.log(`The sum is: ${result}`);
    res.setHeader('Content-Type','text/html');
    res.write(
      `<html>
        <head><title>Calculator Page</title></head>
        <body>
          <h1>Your Result is : ${result}</h1>
        </body>
      </html>
    `);
    res.end();
  });
}

exports.sumRequestHandler = sumRequestHandler;