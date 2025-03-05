import React from "react";
import play_icon from "../../../assets/hero/play_icon.png";
import info_icon from "../../../assets/hero/info_icon.png";
import Baahubali_3 from "../../../assets/hero/Baahubali_3.jpg";
import Baahubali_title from "../../../assets/hero/Baahubali_title.png";

function heroHome() {
  return (
    <>
      <div className="hero">
        <img src={Baahubali_3} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={Baahubali_title} alt="" className="caption-img" />
          <p>
            Baahubali 2: The Conclusion follows the story of Mahendra Baahubali,
            who learns about the betrayal and tragic downfall of his father,
            Amarendra Baahubali, at the hands of his uncle, Bhallaladeva. The
            film unveils the backstory of Amarendra’s love for Devasena.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default heroHome;
