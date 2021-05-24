import React from "react";
import Bookcard from "../../components/Bookcard/Bookcard";

function Donation() {
  return (
    <div className="donation-wrapper">
      <div className="card-wrapper">
        <Bookcard image={null} title="" description="" pages={500}></Bookcard>
      </div>
    </div>
  );
}

export default Donation;
