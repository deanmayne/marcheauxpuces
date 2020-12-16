import { connect } from "react-redux";
import {fetchSearchProducts} from '../../actions/product_actions'

import Search from "./search";

const mapStateToProps = (state,{match: {params: { searchTerm },},}) => ({

  products: Object.values(state.entities.products),
  searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchProducts: (searchTerm) => dispatch(fetchSearchProducts(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
