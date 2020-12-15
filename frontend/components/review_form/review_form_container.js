import { connect } from 'react-redux';

import { createReview } from '../../actions/product_actions.js';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    session: state.session.id,
})

const mapDispatchToProps = dispatch => {
    return{
        createReview: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReviewForm);
