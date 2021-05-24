import React from "react";
import "./Bookview.scss";
import Bookcard from "../../components/Bookcard/Bookcard";
import ProductImageHarryPotter4 from "../../images/HarryPotter4.jpg";
import ProductImageHarryPotter1 from "../../images/HarryPotterundderSteinderWeisen.jpeg";

function Bookview() {
  return (
    <div className="bookview-wrapper">
      <Bookcard
        image={ProductImageHarryPotter4}
        title="Harry Potter und der gefangene von Askaban"
        description="Teil 4"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
      <Bookcard
        image={ProductImageHarryPotter1}
        title="Harry Potter und der Stein der Weisen"
        description="Teil 1"
        pages={500}
      ></Bookcard>
    </div>
  );
}

export default Bookview;
