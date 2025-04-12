const http = require('http')
const server = http.createServer(async (req , res) =>{
    if (req.url === '/api' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.write('this is my Node.js API')
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})
server.listen(5000 , () =>{
    console.log(`server started on port `)
})


