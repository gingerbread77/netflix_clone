import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import MovieCards from "../../components/MovieCards/MovieCards";
import Footer from "../../components/Footer/Footer";
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
          <MovieCards/>
        </div>
      </div>
      <div className="more-movie">
        <MovieCards sectionName={"Blockbuster Movies"} section={"top_rated"} />
        <MovieCards sectionName={"Only on Netflix"} section={"popular"}/>
        <MovieCards sectionName={"Upcoming"} section={"upcoming"}/>
        <MovieCards sectionName={"Top Pics for you"} section={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
