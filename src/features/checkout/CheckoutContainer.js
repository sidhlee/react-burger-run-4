import { connect } from "react-redux";
import Checkout from "./Checkout";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice }
  } = state;
  return { ingredients, totalPrice };
};

export default connect(mapState)(Checkout);
