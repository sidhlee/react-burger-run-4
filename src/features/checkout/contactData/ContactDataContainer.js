import { connect } from "react-redux";
import ContactData from "./ContactData";
import { orderBurger } from "./actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice },
    auth: { idToken }
  } = state;
  return { ingredients, totalPrice, idToken };
};

const actionCreators = {
  orderBurger
};
export default connect(mapState, actionCreators)(ContactData);
