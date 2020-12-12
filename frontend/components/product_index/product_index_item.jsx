import { withRouter } from "react-router-dom";
import React from "react";
import {Link} from 'react-router-dom'

const ProductIndexItem = ({ product }) => (
  <Link to={"/product/"+product.id} className="product-card">
    <img src="https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg" />
    <div className="product-card__name">{product.name}</div>
    <div className="product-card__detail">
      <div className="product-card__location">{product.location}</div>
      <div className={"product-card__shipping--" + product.free_shipping}>
        {product.free_shipping === "true" ? "Free Shipping" : "Paid Shipping"}
      </div>
    </div>
    <div className="product-card__price">${product.price}</div>
  </Link>
);

export default ProductIndexItem;
