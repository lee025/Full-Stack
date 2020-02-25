import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">Login</Link>
  };
};

const mdtp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(removeSessionErrors())
  };
};

export default connect(mstp, mdtp)(SessionForm);
