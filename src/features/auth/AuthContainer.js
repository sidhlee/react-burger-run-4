import { connect } from "react-redux";
import { auth } from "./actions";
import Auth from "./Auth";

const mapState = state => {
  const {
    auth: { loading, error, idToken }
  } = state;
  return {
    loading,
    error,
    isAuthenticated: idToken !== null
  };
};
const actionCreators = {
  auth
};

export default connect(mapState, actionCreators)(Auth);
