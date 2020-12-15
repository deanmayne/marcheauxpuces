import React from "react";
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.product_id);
  }

  render() {
      const {reviews} = this.props
    return (
      <div className="reviews-grid">
          <div className="reviews-grid__title">Reviews:</div>
        {reviews.map((review) => {
          return ( <ReviewsIndexItem key={review.id} review={review} />);
        })}
      </div>
    );
  }
}

export default ReviewsIndex;