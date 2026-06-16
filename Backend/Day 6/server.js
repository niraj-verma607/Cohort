const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect("MONGODB_CONNECTION_STRING").then(() => {
    console.log("Database Connected");
  });
}

connectToDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
