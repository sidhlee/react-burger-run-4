import { connect } from "react-redux";
import App from "./App";
import { checkAuthStatus } from "../features/auth/actions";

const actionCreators = {
  checkAuthStatus
};

export default connect(null, actionCreators)(App);
