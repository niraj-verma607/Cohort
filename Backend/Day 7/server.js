// Server ko start karna and database se connect karna

require("dotenv").config(); //jab tak e line nahi hoga hum .env ke data ko use nahi kar skte hai (undefined ayega)
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
