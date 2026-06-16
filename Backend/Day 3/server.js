const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World !");
// });

// app.get("/about", (req, res) => {
//   res.send("About Section");
// });

app.use(express.json()); //Isko req.body ka data padhne ke liye use hota hai e ek middleware hai aur iske bina hum req.body ka data nhi padh skte hai

const notes = [];

app.post("/notes", (req, res) => {
  // Post method creates new resources
  console.log(req.body);
  notes.push(req.body);
  res.send("Note Created");
});

app.get("/notes", (req, res) => {
  //Get method fetch resources
  res.send(notes);
});

app.listen(3000, () => {
  console.log("Running on Port 3000");
});
