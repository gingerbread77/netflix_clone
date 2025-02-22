import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img className="logo" src={logo} alt="netflix logp" />
        <ul>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>News&Popular</li>
          <li>MyList</li>
          <li>Browse by Langauges</li>
        </ul>
      </div>

      <div className="right">
        <img className="icons" src={search_icon} alt="search icon" />
        <p>Kids</p>
        <img className="icons" src={bell_icon} alt="notification" />
        <div className="profile">
          <img className="profile-img" src={profile_img} alt="profile image" />
          <img className="icons" src={caret_icon} alt="caret" />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
