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
  imdb,
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
    imdb: { rating: imdb?.rating },
  };
  return movieData;
}
