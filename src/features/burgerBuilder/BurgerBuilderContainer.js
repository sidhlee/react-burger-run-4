import { connect } from "react-redux";
import BurgerBuilder from "./BurgerBuilder";
import { addIngredient, removeIngredient } from "./actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice }
  } = state;
  return { ingredients, totalPrice };
};

const actionCreators = {
  addIngredient,
  removeIngredient
};

export default connect(mapState, actionCreators)(BurgerBuilder);
