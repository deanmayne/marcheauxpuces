import { connect } from 'react-redux';
import { fetchProducts, fetchCategoryProducts } from '../../actions/product_actions';

import ProductIndex from './product_index';


const mapStateToProps = (state, ownProps) => {

   const category = ownProps.match.path.slice(1)


    return ({
        products: Object.values(state.entities.products),
        category: category
    })
}



const mapDispatchToProps = (dispatch) => {
    return ({
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCategoryProducts: (category) => dispatch(fetchCategoryProducts(category)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

