import React from 'react';
import { Link } from 'react-router';

import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => (
  reviews.map(review => (
    <ReviewListItemContainer review={review} key={review.id}/>
  ))
);

const ProductDetail = ({ product, reviews }) => {
  return (
    <div>
      <ul className="product-list">
        <img className="index-image" src={product.picture_url}/>
        <li>Rating: {product.average_rating || 'No reviews yet'}</li>
        <li>Description: {product.description}</li>
      </ul>
      <br/>
      <div className="reviews">
        <h3>Reviews</h3>
        {reviewList(reviews)}
      </div>
    </div>
  );
};

export default ProductDetail;
