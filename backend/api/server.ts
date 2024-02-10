import express from "express";
import { flashcardRouter } from "./routers/flashcardRouter";

export const app = express();

app.get("/", (_req, res) => {
  res.json({
    appName: "API for LearnApp version 0.1",
  });
});

app.use("/api/flashcards", flashcardRouter);
