import { connect } from "react-redux";
import App from "./App";
import { checkAuthStatus } from "../features/auth/actions";

const mapState = state => {
  const {
    auth: { idToken }
  } = state;
  return {
    isAuthenticated: idToken !== null
  };
};
const actionCreators = {
  checkAuthStatus
};

export default connect(mapState, actionCreators)(App);
