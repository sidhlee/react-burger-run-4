import { connect } from "react-redux";
import BurgerBuilder from "./BurgerBuilder";
import {
  addIngredient,
  removeIngredient,
  initIngredients
} from "./actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice, fetchError }
  } = state;
  return { ingredients, totalPrice, fetchError };
};

const actionCreators = {
  addIngredient,
  removeIngredient,
  initIngredients
};

export default connect(mapState, actionCreators)(BurgerBuilder);
