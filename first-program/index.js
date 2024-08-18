const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/home", function (req, res) {
  res.send("Welcome home");
});

app.get("/about", function (req, res) {
  res.send("Welcome to About Us page");
});

app.get("/node", function (req, res) {
  res.send("Welcome to my Node Js project");
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});


