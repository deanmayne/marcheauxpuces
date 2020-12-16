import React from 'react';
import { connect } from "react-redux";
import Favorites from "./favorites";
import {withRouter} from 'react-router';
import {fetchFavoriteProducts} from '../../actions/favorites_actions'

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.entities.favorites),
    liker_id: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({

    fetchFavoriteProducts: (liker_id) => dispatch(fetchFavoriteProducts(liker_id))

  })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));
