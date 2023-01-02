import React from "react";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, filterName, filterRating }) => {
  return (
    <div className="movies__container">
      <div className="movie-add">
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
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
              <Link style={{ textDecoration: "none" }} to={`/${movie.title}`}>
                <MovieCard movie={movie} key={movie.id} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;