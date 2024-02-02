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

// GET-Route: show movie details for each movie (by ID)
movieRouter.get(
  "/:movieId",
  async function getOneMovieWithDetailsCtrl(req, res) {
    try {
      const movieId = req.params.movieId;
      const result = await MovieService.getMovieDetail(movieId);
      console.log(result);
      res.json({ success: true, result });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error,
        message:
          error.message || "Fehler Router-Movie-Details: Kein Film erhalten",
      });
    }
  }
);

export default movieRouter;
