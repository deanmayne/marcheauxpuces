import { connect } from 'react-redux';

import { createProduct } from '../../actions/product_actions';
import ProductForm from './product_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
   session: state.session.id

});



const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);



