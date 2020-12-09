import React from 'react';
import { Link } from 'react-router-dom';

import ProductDetail from './product_detail';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const ProductShow = ({ product, productId, fetchProduct, reviews, openModal }) => {
  const products = {
    [productId]: product
  };


  return(
    <div className="single-product-show">

      <div className="product-details">
        <ProductDetail product={product} reviews={reviews} />
        <span className="review-button" onClick={() => openModal('review')}>Leave a Review</span>
      </div>
    </div>
  );
};

export default ProductShow;
