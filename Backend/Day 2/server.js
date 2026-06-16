const express = require("express");

const app = express(); //Server instance create karna

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is About page");
});

app.get("/home", (req, res) => {
  res.send("This is Homepage");
});

app.listen(3000); //Server start karna
