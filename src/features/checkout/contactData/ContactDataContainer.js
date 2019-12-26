import { connect } from "react-redux";
import ContactData from "./ContactData";
import { orderBurger } from "./actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice }
  } = state;
  return { ingredients, totalPrice };
};

const actionCreators = {
  orderBurger
};
export default connect(mapState, actionCreators)(ContactData);
