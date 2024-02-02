import { getDB } from "./getDB.js";
import { makeMovie } from "../domain/Movie.js";
import { ObjectId } from "bson";

// Show all movies from db
export async function findAllMovies() {
  const db = await getDB();
  const moviesArray = await db.collection("movieDetails").find({}).toArray();
  // console.log(moviesArray);
  return moviesArray.map((movie) => makeMovie(movie));
}

// Show movie details --> find movie by Id
export async function findMovieById(movieId) {
  const db = await getDB();
  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });
  if (!movie) throw new Error("Film mit dieser ID existiert nicht");
  return makeMovie(movie);
}
