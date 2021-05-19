import React from "react";
import "./Bookcard.scss";
import ProductImage from "../../images/HarryPotter4.jpg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Bookcard() {
  return (
    <div className="bookcard-container">
      <img id="product-image" src={ProductImage} alt="" />

      <p>Harry Potter und der gefangene von Askaban</p>
      <div id="product-content-wrapper">
        <VisibilityIcon></VisibilityIcon>

        <ShoppingBasketIcon></ShoppingBasketIcon>
      </div>
    </div>
  );
}

export default Bookcard;
