import React from "react";
import "./ShoppingCart.scss";
import CartCard from "../../components/CartCard/CartCard";

import ImageCard from "../../images/HarryPotter4.jpg";
import { inject, observer } from "mobx-react";
import { cartStore } from "../../stores/cartStore";

function ShoppingCart() {
  console.log(cartStore.cart);

  const unique = [...Array.from(new Set(cartStore.cart))];
  return (
    <div className="wrapper-cart">
      <div id="cart-container">
        <h5 id="heading-cart">Warenkorb</h5>
        <div className="cart-container-main">
          {cartStore.cart === [] ? (
            <span>Nix im Warenkorb!</span>
          ) : (
            unique.map((item: any) => {
              return <CartCard path={item.path} title={item.title}></CartCard>;
            })
          )}
        </div>

        {/* Buch zum Warenkorb hinzufügen (objekt) */}
      </div>
    </div>
  );
}

export default inject("cartStore")(observer(ShoppingCart));
