
                 // create a server in a simple way

// const http = require('http')
// http.createServer((req , res) =>{
//     res.end("hello mister danih")
// }).listen(3699, () =>{
//     console.log('server is running ')
// })




// const http = require('http')
// http.createServer((request , responce) =>{
//     responce.end('hy good mornig guys')
// }).listen(3699, () =>{
//     console.log("server is running port : 3699")
// })



const http = require('http')
http.createServer((req , res) =>{
    res.write("hy mister")
    res.end()

}).listen(3030 )

