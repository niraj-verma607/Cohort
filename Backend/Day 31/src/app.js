import express from "express";
import authRouter from "./routes/auth.routes.js";
import handleError from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

// app.js file me jo sabse last middleware hoga wo ahi hoga jo error handling ke liye use hoga
app.use(handleError);

export default app;
