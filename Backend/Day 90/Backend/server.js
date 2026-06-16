require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

let port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
