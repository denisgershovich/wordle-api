import express from "express";
import { getRandomWord } from "../services/wordService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const word = await getRandomWord();

    if (word) {
      res.json({ word });
    } else {
      res.status(404).json({ error: "No words found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
