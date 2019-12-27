import { connect } from "react-redux";
import { auth } from "./actions";
import Auth from "./Auth";

const mapState = state => {
  const {
    auth: { loading, error }
  } = state;
  return {
    loading,
    error
  };
};
const actionCreators = {
  auth
};

export default connect(mapState, actionCreators)(Auth);
