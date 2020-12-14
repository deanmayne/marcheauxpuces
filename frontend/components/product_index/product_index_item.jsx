import { withRouter } from "react-router-dom";
import React from "react";
import {Link} from 'react-router-dom'

const ProductIndexItem = ({ product }) => (
  <Link to={"/product/"+product.id} className="product-card">
    <img src={product.img_url} />
    <div className="product-card__name">{product.name}</div>
      <div className="product-card__location">{product.location}</div>
      <div className={"product-card__shipping--" + product.free_shipping}>
        {product.free_shipping === "true" ? "Free Shipping" : "Paid Shipping"}
      </div>
    <div className="product-card__price">${product.price}</div>
  </Link>
);

export default ProductIndexItem;
