import React from "react";
import Icon from "../icons/icon";

const ReviewsIndexItem = ({ review }) => {

    let stars = [];
    for (let i = 1; i <= review.rating; i++) {
      stars.push(<Icon icon="star-filled" />);
    }

  return (
    <div className="review-detail">
      <div className="review-header">
        <div className="review-detail--username">{review.username}</div>
        <div className="review-detail--rating">{stars}</div>
      </div>
      <div className="review-detail--body">{review.body}</div>
    </div>
  );
};

export default ReviewsIndexItem;
