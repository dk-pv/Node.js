  

// //import 

// const OS = require('os')
// console.log("type :" ,OS.type())
// console.log("platform :",OS.platform());
// console.log("totalMemory : " , OS.totalmem());
// console.log("Processor Architecture : ",OS.arch())
// console.log("System name : ",OS.hostname())
// console.log("Free Memory : ", OS.freemem());
// console.log('CPU details : ' , OS.cpus())
// console.log("System Load Average : " , OS.loadavg());
// console.log("Network inFORMATION : ",OS.networkInterfaces())
// console.log('loged user :',OS.userInfo())
// console.log('USER form directory : ',OS.homedir());
// console.log("system app time(in seconds) :",OS.uptime())


// const fs = require('fs');
// const readStream = fs.createReadStream('fsSample.txt', 'utf8');
// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });
// readStream.on('end', () => {
//   console.log('Finished reading.');
// });



// const HTTP = require('http')

// const server =  HTTP.createServer((req , res) =>{
//   res.writeHead(200 ,{'content-type' : 'plain/text'})
//   res.write('this is my server')
//   res.end()
// })
// server.listen(8080 , () =>{
//   console.log('server is running')
// })




const add = (x,y) => {
  return x+y
}
module.exports = add