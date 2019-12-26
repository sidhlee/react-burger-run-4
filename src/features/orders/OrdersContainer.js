import { connect } from "react-redux";
import Orders from "./Orders";
import { fetchOrders } from "./actions";

const mapState = state => {
  const {
    orders: { orders }
  } = state;
  return { orders };
};

const actionCreators = {
  fetchOrders
};

export default connect(mapState, actionCreators)(Orders);
