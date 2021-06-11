import React from "react";
import "./ShoppingCart.scss";
import CartCard from "../../components/CartCard/CartCard";

import ImageCard from "../../images/HarryPotter4.jpg";
import { inject, observer } from "mobx-react";
import { cartStore } from "../../stores/cartStore";

function ShoppingCart() {
  return (
    <div className="wrapper-cart">
      <div id="cart-container">
        <h5 id="heading-cart">Warenkorb</h5>
        {cartStore.cart.map((item: any) => {
          return <CartCard image={ImageCard} title={item}></CartCard>;
        })}

        {/* Buch zum Warenkorb hinzufügen (objekt) */}
      </div>
    </div>
  );
}

export default inject("cartStore")(observer(ShoppingCart));
