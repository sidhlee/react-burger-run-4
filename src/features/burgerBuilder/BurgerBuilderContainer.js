import { connect } from "react-redux";
import BurgerBuilder from "./BurgerBuilder";
import {
  addIngredient,
  removeIngredient,
  initIngredients,
  startOrder
} from "./actions";

import { setAuthRedirectPath } from "../auth/actions";

const mapState = state => {
  const {
    burgerBuilder: { ingredients, totalPrice, fetchError },
    auth: { idToken }
  } = state;
  return {
    ingredients,
    totalPrice,
    fetchError,
    isAuthenticated: idToken !== null
  };
};

const actionCreators = {
  addIngredient,
  removeIngredient,
  initIngredients,
  startOrder,
  setAuthRedirectPath
};

export default connect(mapState, actionCreators)(BurgerBuilder);
