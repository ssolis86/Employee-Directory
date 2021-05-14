import React from "react";
import "./style.css";
import serverroom from "../../images/serverroom.png";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${serverroom})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
