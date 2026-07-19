const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://nirajverma9607_db_user:UnhOhJThtdyknc2Z@cluster0.uehaqa3.mongodb.net/",
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectToDb;
