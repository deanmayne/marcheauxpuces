import { connect } from 'react-redux';

import { createReview } from '../../actions/product_actions.js';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
    return{
        createReview: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(null,mapDispatchToProps)(ReviewForm);
