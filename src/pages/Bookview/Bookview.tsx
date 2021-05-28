import React from "react";
import "./Bookview.scss";
import Bookcard from "../../components/Bookcard/Bookcard";
import ProductImageHarryPotter4 from "../../images/HarryPotter4.jpg";
import ProductImageHarryPotter1 from "../../images/HarryPotterundderSteinderWeisen.jpeg";
import axios from "axios";

function Bookview() {
  // const bookRes=()=>{
  //   axios.get(process.env.REACT)
  // }
  return (
    <div className="bookview-wrapper">
      <Bookcard
        image={ProductImageHarryPotter4}
        title="Harry Potter und der gefangene von Askaban"
        pages={500}
      ></Bookcard>
    </div>
  );
}

export default Bookview;
