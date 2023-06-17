const express = require("express");
const app = express();

const path = require("path");
const Public_Path = path.join(__dirname, "Public");

//app.use(express.static(Public_Path));

app.get("/home", (_, res) => {
  res.sendFile(`${Public_Path}/home.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${Public_Path}/404.html`);
});

console.log(Public_Path);
app.listen(8080);
