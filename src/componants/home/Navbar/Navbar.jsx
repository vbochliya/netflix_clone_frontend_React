import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../../public/logo.svg";
import searchIcon from "../../../assets/navbar/search_icon.svg";
import notificationIcon from "../../../assets/navbar/bell_icon.svg";
import profileImage from "../../../assets/navbar/profile_img.png";
import caretIcon from "../../../assets/navbar/caret_icon.svg";
import SearchInput from "../searchInput/searchInput";

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        {searching == false && (
          <img
            src={searchIcon}
            onClick={() => setSearching(true)}
            alt="Search Icon"
            className="icons"
          />
        )}
        {searching == true && <SearchInput></SearchInput>}

        <img src={notificationIcon} alt="Notifications" className="icons" />
        <div className="navbar-profile">
          <img src={profileImage} alt="Profile Image" className="profile" />
          <img src={caretIcon} alt="Caret Icon" />
          {/* <div className="dropdown">
            <p>Sign Out</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
