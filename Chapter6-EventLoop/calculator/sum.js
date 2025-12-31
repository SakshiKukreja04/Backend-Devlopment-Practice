const sumRequestHandler = (req,res) => {
  console.log('1.Sum request handler called',req.url);
  const body = [];
  let result;
  req.on('data',(chunk)=>{body.push(chunk);
    console.log('2.Data received');
  })
  
  req.on('end' ,()=>{
    console.log('3.Request ended');
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);
    console.log(`The sum is: ${result}`);
    

  });
  console.log('4.Sending request');
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
}

exports.sumRequestHandler = sumRequestHandler;