// const http = require('http')
// http.createServer((request , response) =>{
//     response.write("this is my node")
//     response.end()
// }).listen(3001 , () => console.log("server is running"))

// const HTTP = require('http')
// HTTP.createServer((request , response) =>{
//     response.writeHead("this is my server ")
//     response.end()
// }).listen(2001,() =>{
//     console.log("its running")
// })



const HTTP = require("http");
const url = require("url");

const server = HTTP.createServer((req, res) => {
  const urlReq = url.parse(req.url, true).pathname;

  if (urlReq == "/") {
    res.write("home page");
    res.end();
  } else if (urlReq == "/about") {
    res.write("about page");
    res.end();
  } else if (urlReq == "/products") {
    res.write("this is my all products");
    res.end();
  }
});
server.listen(3035, () => {
  console.log("server is running port 3030");
});
