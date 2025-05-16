
const url = require('url')
const http = require('http')
const fs = require('fs')
http.createServer((req , res) =>{
    const parsed = url.parse(req.url)
    fs.readFile("." + parsed.pathname , (err , data)  =>{
         if(err){
            res.writeHead(404 , {'content-type' : 'text/html'})
            return res.end('error! page is not found')
         }
         res.writeHead(200 , {"content-type" : 'text/html'})
         res.write(data)
         res.end()
    })
    
}).listen(5555 , () =>{
    console.log('server is running')
})