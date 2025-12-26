const fs = require('fs');

console.log("Hello,World!");

fs.writeFile("output.txt","Writing to a file!", (err)=>{
  if(err) console.log("error occured");
  else console.log("File written successfully");
});