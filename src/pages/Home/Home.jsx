import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-banner">
        <img className="banner-img" src={hero_banner} alt="banner image" />
        <div className="hero-caption">
          <img className="caption-img" src={hero_title} alt="hero image" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            facilis eaque sint qui enim quisquam quaerat magni. Inventore,
            veritatis! Laboriosam veniam saepe accusamus fugiat consequuntur
            sint. Soluta magnam odio voluptatem?
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
        </div>
      </div>
    </div>
  );
};

export default Home;
