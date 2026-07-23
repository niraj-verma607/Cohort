import express from "express";

// ---- Express App Setup ----
const app = express();
app.use(express.json());

// ---- ejs Template Engine Setup ----
app.set("view engine", "ejs");

app.set("views", "./views");

app.use(express.static("public"));

// ---- Routes ----
app.get("/", async (req, res) => {
  res.render("index", {
    username: "Building",
    bio: "Something about Building",
    profileImage:
      "https://images.unsplash.com/photo-1779206746296-b7d3f467e55d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  });
});

// ---- Start Server ----
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
