
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



// const http = require('http')
// http.createServer((req , res) =>{
//     res.write("hy mister")
//     res.end()

// }).listen(3030 )








// add html page has a server response

// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req , res) =>{
//     const readableData = fs.createReadStream('./sample.html',{encoding : 'utf-8'})
//     res.writeHead(200, {'content-type' : "text/html"})
//     readableData.pipe(res)
// })
// server.listen(3369 , () =>{
//     console.log('server is created successfully ')
// })




const http = require('http')
const fs = require('fs')

http.createServer((req , res)  =>{
    fs.readFile('./sample.html' , (err ,data) =>{
        if (err) {
            console.log('error' ,err)
        }else{
            console.log('data is added')
        }
        res.writeHead(200 , {'content-type' : 'text/html'})
        res.end(data)
    })
   
}).listen(5008 , () =>{
    console.log('sever is running')
})