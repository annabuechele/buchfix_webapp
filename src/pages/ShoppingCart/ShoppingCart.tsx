import React from "react";
import "./ShoppingCart.scss";
import Bookcard from "../../components/Bookcard/Bookcard";

import ImageCard from "../../images/HarryPotter4.jpg";

function ShoppingCart() {
  return (
    <div className="wrapper-cart">
      <div id="cart-container">
        <h5 id="heading-cart">Warenkorb</h5>
        {/* Bookcard nur vorübergehend */}
        <Bookcard image={ImageCard} pages={213} title="hallo"></Bookcard>
        {/* Buch zum Warenkorb hinzufügen (objekt) */}
      </div>
    </div>
  );
}

export default ShoppingCart;
