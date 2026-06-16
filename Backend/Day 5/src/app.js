const express = require("express");

const app = express();

let notes = [];

app.use(express.json());

// POST Method
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Note created Successfully",
  });
});

// GET Method
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: notes,
  });
});

// DELETE Method
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(200).json({
    message: "Note Deleted",
  });
});

// Patch Method
app.patch("/notes/:index", (req, res) => {
  //   res.send(notes[req.params.index].description);
  notes[req.params.index].description = req.body.description;
  res.status(200).json({
    message: "Note Updated",
  });
});

module.exports = app;
