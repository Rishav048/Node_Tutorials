const express = require("express");
const app = express();

const path = require("path");
const Public_Path = path.join(__dirname, "Public");

app.use(express.static(Public_Path));

console.log(Public_Path);
app.listen(8080);
