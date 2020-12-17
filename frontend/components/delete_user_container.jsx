import React from 'react';
import { closeModal } from "../actions/modal_actions";
import {logout} from '../actions/session_actions';
import {connect} from 'react-redux'



function DeleteUserContainer({user, closeModal}) {
    return (
      <div>
        <button
          type="button"
          className="button button--primary button--lg"
          onClick={() => {
            $.ajax({
              url: `/api/users/${user.id}`,
              method: "DELETE",
            });
            logout();
          }}
        >
          Delete My Account
        </button>
        <button
          type="button"
          className="button button--primary button--lg"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    );
};


const mapStateToProps = (state) => {
  return {
    user: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserContainer);

