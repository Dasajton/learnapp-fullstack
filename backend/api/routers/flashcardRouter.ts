import { Router } from "express";

export const flashcardRouter = Router();

flashcardRouter.get("/", (_req, res) => {
  res.json("get all flashcards");
});

flashcardRouter.get("/:suuid", (req, res) => {
  const suuid = req.params.suuid;
  res.json(`get one flashcard with suuid ${suuid}`);
});

flashcardRouter.post("/", (_req, res) => {
  res.json("create a flashcard");
});

flashcardRouter.put("/:suuid", (req, res) => {
  const suuid = req.params.suuid;
  res.json(`replace flashcard with suuid ${suuid}`);
});

flashcardRouter.patch("/:suuid", (req, res) => {
  const suuid = req.params.suuid;
  res.json(`update fields on flashcard with suuid ${suuid}`);
});

flashcardRouter.delete("/:suuid", (req, res) => {
  const suuid = req.params.suuid;
  res.json(`delete flashcard with suuid ${suuid}`);
});
