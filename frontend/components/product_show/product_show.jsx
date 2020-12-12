import React from "react";

const ProductShow = ({ product }) => (
  <div className="product-show-container">
    <div className="product-show">
      <img src="https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg" />
      <div className="product-show__name">{product.name}</div>
      <div className="product-show__location">{product.location}</div>
      <div className={"product-show__shipping--" + product.free_shipping}>
        {product.free_shipping === "true" ? "Free Shipping" : "Paid Shipping"}
      </div>
      <div className="product-show__price">${product.price}</div>
      <button type="submit" className="button button--primary button--lg">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductShow;
