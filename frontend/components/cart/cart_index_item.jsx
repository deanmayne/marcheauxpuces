import { withRouter } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const CartIndexItem = ({ product }) => (
  <div className="cart-item">
    <Link to={"/product/" + product.id}>
      <img
        className="cart-item--left"
         src="https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg"
      />
      <div className="cart-item--right">
        <div className="cart-item__name">{product.name}</div>
        <div className="cart-item__location">{product.location}</div>
        <div className={"cart-item__shipping--" + product.free_shipping}>
          {product.free_shipping === "true" ? "Free Shipping" : "Paid Shipping"}
        </div>
        <div className="cart-item__price">${product.price}</div>
      </div>
    </Link>
    <div className ="cart-item--far-right">
        <button className= "button button--primary button--sm">Remove from Cart</button>
    </div>
  </div>
);

export default CartIndexItem;
