import { connect } from "react-redux";
import Orders from "./Orders";
import { fetchOrders } from "./actions";

const mapState = state => {
  const {
    orders: { orders },
    auth: { idToken, localId }
  } = state;
  return { orders, idToken, localId };
};

const actionCreators = {
  fetchOrders
};

export default connect(mapState, actionCreators)(Orders);
