import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, filterName, filterRating }) => {
  return (
    <div className="movie-list">
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .trim()
              .includes(filterName.toLowerCase().trim()) &&
            movie.rating >= filterRating
        )
        .map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} key={movie.id} />
          </div>
        ))}
    </div>
  );
};

export default MovieList;