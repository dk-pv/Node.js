// const HTTP = require('http')
// const server = HTTP.createServer((request , response) =>{
//     response.writeHead(200 , {'content-type' : 'text/plain'})
//     response.end("this is our first server calling")
// })
// const PORT = 30002
// server.listen(PORT , ()=>{
//     console.log('server is running')
// })




// const HTTP = require('http')
// const server = HTTP.createServer((request , response) =>{
//     response.writeHead(200,{'content-type': 'text/plain'})
//     response.end('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg')
// })
// const  PORT = 3002
// server.listen(PORT , () =>{
//     console.log('server  is renning')
// })



// const HTTP = require('http')
// const PORT = 3000 

// const server = HTTP.createServer((request , response) =>{
//     response.writeHead(200 , {'content-type' : 'text/plain'})
//     response.end("hy iam danish")
// }) 
// server.listen(PORT , () =>{
//     console.log("sever is running")
// })



















// const HTTP = require('http')
// const PORT = 5002

// const SERVER = HTTP.createServer((request , response) =>{
//     response.writeHead(200 , {"content-type" : 'text/plain'})
//     response.end("you know me iam the devil")
// })

// SERVER.listen(PORT , () =>{
//     console.log("server is run")
// })






// const http = require('http')
// http.createServer((request , response) =>{
//     response.write("this is my node")
//     response.end()
// }).listen(3001 , () => console.log("server is running"))




// const  HTTP = require('http')
// const PORT = 3005

// const SERVER = HTTP.createServer((request,response) =>{
//     response.writeHead(200, {'content-type' : 'plain/text'})
//     response.end("this my own server")
// })
// SERVER.listen(PORT , () =>{
//     console.log('server is running')
// })





const HTTP = require('http')
HTTP.createServer((request , response) => {
    response.write('hello http module')
    response.end()
}).listen(8080)