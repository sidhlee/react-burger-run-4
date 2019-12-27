import { connect } from "react-redux";
import { auth } from "./actions";
import Auth from "./Auth";

const actionCreators = {
  auth
};

export default connect(null, actionCreators)(Auth);
