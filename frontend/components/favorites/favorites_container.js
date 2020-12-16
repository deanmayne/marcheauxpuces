import React from 'react';
import { connect } from "react-redux";
import FavoritesIndex from "./cart_index";

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.favorites),
    shopper_id: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesIndex);
