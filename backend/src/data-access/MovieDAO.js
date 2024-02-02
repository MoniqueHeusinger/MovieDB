import { getDB } from "./getDB.js";
import { makeMovie } from "../domain/Movie.js";

// Show all movies from db
export async function findAllMovies() {
  const db = await getDB();
  const moviesArray = await db.collection("movieDetails").find({}).toArray();
  // console.log(moviesArray);
  return moviesArray.map((movie) => makeMovie(movie));

  //funktioniert --> zeigt alle Movies im Terminal an
  // return moviesArray.map((movie) => console.log(movie));
}
