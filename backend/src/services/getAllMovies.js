import { MovieDAO } from "../data-access/index.js";

// All movies from DB
export async function getAllMovies() {
  const movies = await MovieDAO.findAllMovies();
  return movies?.map((movie) => asMovieListItem(movie));
}

function asMovieListItem(movie) {
  return {
    id: movie._id,
    title: movie.title,
    director: movie.director,
    poster: movie.poster,
    actors: movie.actors,
    year: movie.year,
    runtime: movie.runtime,
    genres: movie.genres,
    plot: movie.plot,
  };
}
