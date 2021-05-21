import React from "react";
import "./Bookview.scss";
import Bookcard from "../../components/Bookcard/Bookcard";
import ProductImage from "../../images/HarryPotter4.jpg";
function Bookview() {
  return (
    <div className="bookview-wrapper">
      <Bookcard
        image={ProductImage}
        title="Title"
        description="Desc"
        pages={500}
      ></Bookcard>
    </div>
  );
}

export default Bookview;
