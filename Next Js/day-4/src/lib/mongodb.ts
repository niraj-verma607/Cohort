import mongoose from "mongoose";

import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error on Connecting DB : ", err);
  }
};
