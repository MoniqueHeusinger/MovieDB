import express from "express";
import { MovieService } from "../services/index.js";

const movieRouter = express.Router();

// GET-Route: show all movies
movieRouter.get("/", async function getAllMoviesCtrl(_, res) {
  try {
    const result = await MovieService.getAllMovies();
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message:
        error.message || "Fehler Router-All-Movies: Keine Filme erhalten",
    });
  }
});

export default movieRouter;
