const http = require("http");
console.log("-->", __filename);
// console.log("-->", __dirname);

const PORT = 8080;

http
  .createServer((req, res) => {
    console.log("Server is runnig at PORT-8080");
    res.write("<h1> Hi This the Server Testing </h1>");
    res.end();
  })
  .listen(PORT);
