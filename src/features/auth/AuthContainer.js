import { connect } from "react-redux";
import { auth, setAuthRedirectPath } from "./actions";
import { resetBuilding } from "../burgerBuilder/actions";
import Auth from "./Auth";

const mapState = state => {
  const {
    auth: { loading, error, idToken, authRedirectPath },
    burgerBuilder: { building }
  } = state;
  return {
    loading,
    error,
    isAuthenticated: idToken !== null,
    authRedirectPath,
    building
  };
};
const actionCreators = {
  auth,
  setAuthRedirectPath,
  resetBuilding
};

export default connect(mapState, actionCreators)(Auth);
