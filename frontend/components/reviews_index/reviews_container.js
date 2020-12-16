import React from "react";
import { connect } from "react-redux";
import ReviewsIndex from "./reviews_index";
import {
  fetchReviews,
} from "../../actions/product_actions";

const mapStateToProps = (state, {product}) => {
  return ({
    reviews: Object.values(state.entities.reviews),
    product_id: product.id
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (product_id) => dispatch(fetchReviews(product_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);
