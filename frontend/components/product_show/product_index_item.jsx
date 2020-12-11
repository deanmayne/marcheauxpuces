import { withRouter } from 'react-router-dom'
import React from 'react';

const ProductIndexItem = ({ product }) => (
    <div className="product-show-box">
        <div className="product-show-name">
            {product.name}
        </div>
        <div className="product-index-description">
            {product.description}
        </div>
        <div className="product-index-price">
            ${product.price}
        </div>
        <div className="product-index-image">
            {product.location}
        </div>
        <div className="product-index-shipping">
            {product.free_shipping} 
        </div>
    </div>
)

export default ProductIndexItem;



    
