const express = require("express");
var { AgeCheck } = require("./Middleware/Age");

const app = express();
app.listen(8081);

app.use(AgeCheck);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
