import { connect } from "react-redux";
import ContactData from "./ContactData";
import { orderBurger } from "./actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice },
    auth: { idToken, localId }
  } = state;
  return { ingredients, totalPrice, idToken, localId };
};

const actionCreators = {
  orderBurger
};
export default connect(mapState, actionCreators)(ContactData);
