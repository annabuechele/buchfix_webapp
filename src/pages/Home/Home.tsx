import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import BoxHome from "../../components/BoxHome/BoxHome";
import ImageBox from "../../images/background-image-login.jpeg";

function Home() {
  return (
    <div className="home-main-wrapper">
      <BoxHome
        image={ImageBox}
        heading="Könnte Ihnen gefallen"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ></BoxHome>
      <BoxHome
        image={ImageBox}
        heading="Bücherübersicht"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ></BoxHome>
      <BoxHome
        image={ImageBox}
        heading="Ihre Fristen ansehen"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      ></BoxHome>
    </div>
  );
}

export default Home;
