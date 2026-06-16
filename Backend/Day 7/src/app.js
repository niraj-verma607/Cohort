const express = require("express");
const noteModel = require("./models/notes.model");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json()); //Middleware for acception data from request body

// POST Method
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    //e ek note ko crate karke database me add karega
    title,
    description,
  });

  res.status(201).json({
    message: "Note Created successfully",
    note,
  });
});

// GET Method

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "Note Fetched successfully",
    note,
  });
});

module.exports = app;
