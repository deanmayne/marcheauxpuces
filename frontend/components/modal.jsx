import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import ReviewFormContainer from "./review_form/review_form_container";
import AddProductFormContainer from "./product_form/add_product_form_container";
import EditProductFormContainer from "./product_form/edit_product_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "review":
      component = <ReviewFormContainer />;
      break;
    case "add_product":
      component = <AddProductFormContainer />;
      break;
    case "edit_product":
      component = <EditProductFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
