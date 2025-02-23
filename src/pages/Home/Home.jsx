import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import MovieCards from "../../components/MovieCards/MovieCards";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-banner">
        <div className="banner-section"></div>
        <img className="banner-img" src={hero_banner} alt="banner image" />
        <div className="hero-caption">
          <img className="caption-img" src={hero_title} alt="hero image" />
          <p>
            Haunted by a traumatic past, Jessica Jones uses her gifts as a
            private eye to find her tormentor before he can harm anyone else in
            Hell's Kitchen.
          </p>
          <div className="hero-buttons">
            <button id="play-btn">
              <img className="icons" src={play_icon} alt="play icon" />
              <span>Play</span>
            </button>
            <button id="info-btn">
              <img className="icons" src={info_icon} alt="info icon" />
              <span>More info</span>
            </button>
          </div>
          <MovieCards section={"Popular on Netflix"} />
        </div>
      </div>
      <div className="more-movie">
        <MovieCards section={"Blockbuster Movies"} />
        <MovieCards section={"Only on Netflix"} />
        <MovieCards section={"Upcoming"} />
        <MovieCards section={"Top Pics for you"} />
      </div>
    </div>
  );
};

export default Home;
