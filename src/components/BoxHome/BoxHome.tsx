import React from "react";
import "./BoxHome.scss";

interface ComponentBoxHomeProps {
  image: any;
  heading: string;
  text: string;
}
function BoxHome(props: ComponentBoxHomeProps) {
  return (
    <div className="box-container">
      <div id="content">
        <img src={props.image} alt="image" id="img-box" />
        <h1 id="heading-box">{props.heading}</h1>
        <p id="text-box">{props.text}</p>
      </div>
    </div>
  );
}

export default BoxHome;
