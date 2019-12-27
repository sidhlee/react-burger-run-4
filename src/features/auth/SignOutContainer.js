import { connect } from "react-redux";
import { signOut } from "./actions";
import SignOut from "./SignOut";

const actionCreators = {
  signOut
};

export default connect(null, actionCreators)(SignOut);
