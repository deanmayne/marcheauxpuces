import { withRouter } from 'react-router-dom'
import React from 'react';

const ProductIndexItem = ({ product }) => (
  <div className="product-card">
    <div className="product-card__name">{product.name}</div>
    <div className="product-card__price">${product.price}</div>
    <div className="product-card__detail">
      <div className="product-card__location">{product.location}</div>
      <div className={"product-card__shipping__"+product.free_shipping}>{product.free_shipping === "true" ? "Free Shipping" : "Paid Shipping"}</div>
    </div>
  </div>
);

export default ProductIndexItem;



    
