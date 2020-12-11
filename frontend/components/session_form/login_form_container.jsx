import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import {removeErrors} from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = ({ errors }, {session}) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        removeErrors: () => dispatch(removeErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);