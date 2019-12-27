import { connect } from "react-redux";
import Layout from "./Layout";

const mapState = state => {
  const {
    auth: { idToken }
  } = state;
  return {
    isAuthenticated: idToken !== null
  };
};
export default connect(mapState)(Layout);
