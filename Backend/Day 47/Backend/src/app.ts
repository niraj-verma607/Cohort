import express from "express";
import runGraph from "./ai/graph.ai.js";

const app = express();

app.get("/", async (req, res) => {
  const result = await runGraph(
    "Write an code for even in JavaScript.",
  );
  res.send(result);
});

export default app;
