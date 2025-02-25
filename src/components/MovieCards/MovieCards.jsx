import React, { useEffect, useState } from "react";
import "./MovieCards.css";

const MovieCards = ({ sectionName, section }) => {
  const [movieData, setMovieData] = useState([]);

  // fetch movie data from TMDB
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU4ZjdlN2ZiMTI3MDI4ODA2ZDYzY2Q5YmViNzQ4ZSIsIm5iZiI6MTc0MDQzNzk5Ni43NzksInN1YiI6IjY3YmNmOWVjOWMyMzBiNTJlNTk5YWNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KNhiZPbt27nwLI1ioOXmRR9LtlQuF7O9Tzj6Wk_omM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${section ? section : "now_playing"}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movie-cards">
      <h2>{sectionName}</h2>
      <div className="popular-movies">
        {movieData.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt="movie image"
                title={movie.original_title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCards;
