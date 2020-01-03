import { connect } from "react-redux";
import { login, removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
