import React from "react";
import "./Home.css";
import Navbar from "../../componants/home/Navbar/Navbar";
import TitleCards from "../../componants/home/TitleCards/TitleCards";
import Display from "../../componants/home/Display/heroHome";

function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Display></Display>

      <div>
        <TitleCards></TitleCards>
      </div>
      <div>
        <TitleCards title="Blockbuster Movies"></TitleCards>
      </div>
      <div>
        <TitleCards title="Upcoming"></TitleCards>
      </div>
      <div>
        <TitleCards title="Only on Netflix"></TitleCards>
      </div>
      <div>
        <TitleCards title="Top picks for YOu"></TitleCards>
      </div>

    </div>
  );
}

export default Home;
