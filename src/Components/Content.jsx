import React from "react";
import "../Components/Content.css";
import ImageHero from "../Images/image-hero-desktop.png";
import DataBiz from "../Images/client-databiz.svg";
import AudioPhile from "../Images/client-audiophile.svg";
import Meet from "../Images/client-meet.svg";
import Maker from "../Images/client-maker.svg";

const Content = () => {
  return (
    <div className="content">
      <div className="text">
        <h1>
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. <br /> Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <div id="button">Learn more</div>
        <div className="partners">
          <img src={DataBiz} />
          <img src={AudioPhile} />
          <img src={Meet} />
          <img src={Maker} />
        </div>
      </div>
      <div className="visual-img">
        <img src={ImageHero} />
      </div>
    </div>
  );
};

export default Content;
