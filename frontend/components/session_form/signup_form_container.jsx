import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { removeErrors } from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, {session}) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
