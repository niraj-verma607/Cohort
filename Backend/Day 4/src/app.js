// app.js ka use ky ky hota hai src folder me
// Server create Karna
// server ko config karna

const express = require("express");

const app = express(); //server create ho jata hai

app.use(express.json()); // server ko config karna

const notes = [];

// POST Method (Make Notes) /notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);
  res.send("Note Created");
});

// GET Method (Get Notes) /notes
app.get("/notes", (req, res) => {
  res.send(notes);
});

// DELETE Method (Delete Note) /notes/:index
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("Note Deleted");
});

// PATCH Method (Update Note) /notes/:index
// req.body = {description :- "Updated Descrption"}
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;

  res.send("Note Updated");
});

module.exports = app;
