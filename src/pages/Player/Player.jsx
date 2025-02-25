import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU4ZjdlN2ZiMTI3MDI4ODA2ZDYzY2Q5YmViNzQ4ZSIsIm5iZiI6MTc0MDQzNzk5Ni43NzksInN1YiI6IjY3YmNmOWVjOWMyMzBiNTJlNTk5YWNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KNhiZPbt27nwLI1ioOXmRR9LtlQuF7O9Tzj6Wk_omM",
    },
  };

  //fetch video data for a specific movie using its ID
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      // return the first object from the results array
      .then((res) => setVideoData(res.results[0]))
      .catch((err) => console.error(err));
  }, []); //ensures it runs only on initial render

  // formate date to yyyy-mm-dd
  const formateDate = (date) => {
    return date.split("T")[0];
  };

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back_arrow_icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="80%"
        height="80%"
        src={`https://www.youtube.com/embed/${videoData.key}`}
        frameBorder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{formateDate(videoData.published_at)}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </div>
  );
};

export default Player;
