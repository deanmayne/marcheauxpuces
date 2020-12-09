import { connect } from 'react-redux';

import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { products: { name } } },) => {
   
    return{
     name,
    //  description,
    //  price,
    //  rating,
    //  location,
    //  free_shipping
    }   

};



const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);



