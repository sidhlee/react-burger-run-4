import { connect } from "react-redux";
import Orders from "./Orders";
import { fetchOrders } from "./actions";

const mapState = state => {
  const {
    orders: { orders },
    auth: { idToken }
  } = state;
  return { orders, idToken };
};

const actionCreators = {
  fetchOrders
};

export default connect(mapState, actionCreators)(Orders);
