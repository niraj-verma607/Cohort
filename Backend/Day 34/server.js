import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { testAi } from "./src/services/ai.service.js";

const PORT = process.env.PORT || 5000;

connectDB().catch((err) => {
  console.log("MongoDB Error:", err);
  process.exit(1);
});

testAi();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
