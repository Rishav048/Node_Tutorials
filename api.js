const express = require("express");
const app = express();
const dbConnect = require("./mongodb.js");

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.listen(5050, () => {
  console.log("Server is running at PORT 5050");
});
