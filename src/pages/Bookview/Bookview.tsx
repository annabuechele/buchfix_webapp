import React from "react";
import "./Bookview.scss";
import Bookcard from "../../components/Bookcard/Bookcard";

function Bookview() {
  return (
    <div className="bookview-wrapper">
      <Bookcard></Bookcard>
    </div>
  );
}

export default Bookview;
