import { connect } from "react-redux";
import ContactData from "./ContactData";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice }
  } = state;
  return { ingredients, totalPrice };
};

export default connect(mapState)(ContactData);
