import React from "react";
import "./MovieCards.css";
import data from "../../assets/movies/Data";

const MovieCards = ({ section }) => {
  return (
    <div className="movie-cards">
      <h2>{section}</h2>
      <div className="popular-movies">
        {data.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <img src={movie.image} alt="movie image" title={movie.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCards;
