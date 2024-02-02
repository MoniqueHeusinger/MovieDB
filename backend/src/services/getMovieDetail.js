import { MovieDAO } from "../data-access/index.js";

export async function getMovieDetail(movieId) {
  const foundMovie = await MovieDAO.findMovieById(movieId);
  if (!foundMovie) throw new Error("Kein Film gefunden mit Id: " + movieId);

  return {
    ...foundMovie,
  };
}
