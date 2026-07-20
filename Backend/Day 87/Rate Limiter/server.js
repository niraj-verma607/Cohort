import "dotenv/config";
import express from "express";
import morgan from "morgan";
import Redis from "ioredis";
import rateLimit from "express-rate-limit";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);




// Express App setup

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Rate Limiter

const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10, // 10 requests per window per IP
  message: {
    error: "Too many requests. Please try again later.",
  },
  statusCode: 429,
  standardHeaders: true, // sends RateLimit-* headers
});

// Apply to every route
app.use(globalLimiter);

// Routes


app.get("/", async (req, res) => {
  let sum = 0;
  for (let i = 0; i <= 10000000; i++) {
    sum += i;
  }
  res.json({
    message: "Sum calculated",
    data: sum,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
