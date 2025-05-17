 const fs = require('fs')

 const requestHandler = (req , res) =>{
    const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>enter form details</title></head/");
    res.write(
      '<body><form action = "/message" method = "POST"> <input type="text" name = "message"/> <input type = "submit" value = "send"/> </form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      console.log("end event recieved");
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=");
      fs.writeFileSync("hello.txt", message[1], (err) => {
        console.log("fileWrite completed");
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
      });
    });
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>enter form details</title></head/");
  res.write("<body><h1>hello from node.js</h1></body>");
  res.write("</html>");
  res.end();
 }
 
module.exports = requestHandler