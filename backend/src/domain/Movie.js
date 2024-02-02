export function makeMovie({
  _id,
  title,
  director,
  year,
  poster,
  imdb_rating,
  runtime,
  genres,
  plot,
  actors,
}) {
  const movieData = {
    _id,
    title,
    director,
    year,
    poster,
    imdb_rating,
    runtime,
    genres,
    plot,
    actors,
  };
  return movieData;
}
