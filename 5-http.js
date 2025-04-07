const http = require('http')
http.createServer((request , response) =>{
    response.write("this is my node")
    response.end()
}).listen(3001 , () => console.log("server is running"))