import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { updateProduct } from '../../actions/product_actions';
import ProductForm from './product_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => ({
   session: state.session.id,
   formType: "Edit Product !"

});



const mapDispatchToProps = dispatch => ({
  processForm: (product) => dispatch(updateProduct(product)),
  closeModal: () => dispatch(closeModal()),
  removeErrors: () => dispatch(removeErrors())
  
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductForm));



