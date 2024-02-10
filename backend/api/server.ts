import express from "express";

export const app = express();

app.get("/", (_req, res) => {
  res.json({
    appName: "API for LearnApp version 0.1",
  });
});
