const http = require('http')
const port = process.env.port || 5000;
const server = http.createServer(async (req , res) =>{
    if (req.url === '/api' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.write('Node.js API')
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})
server.listen(port , () =>{
    console.log(`server started on port : ${port}`)
})


