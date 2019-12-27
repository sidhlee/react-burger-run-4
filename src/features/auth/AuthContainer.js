import { connect } from "react-redux";
import { auth } from "./actions";
import Auth from "./Auth";

const mapState = state => {
  const {
    auth: { loading }
  } = state;
  return {
    loading
  };
};
const actionCreators = {
  auth
};

export default connect(mapState, actionCreators)(Auth);
