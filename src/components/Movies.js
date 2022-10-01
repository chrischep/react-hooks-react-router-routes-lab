import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie) => (
    <div key={movie.title} >
      <h2>{movie.title}</h2>
      <h2>{movie.time}</h2>
      <ul>
        {movie.genres.map((movie) => (
        <li key={movie} >{movie}</li>
      ))}</ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {moviesList}
    </div>
}

export default Movies;
