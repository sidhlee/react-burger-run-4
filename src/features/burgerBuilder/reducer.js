import { INGREDIENT_ADDED, INGREDIENT_REMOVED } from "./actions";

const BASE_PRICE = 4.99;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  beef: 1.3
};

/* Reducers should own the state shape */
const initialState = {
  ingredients: { salad: 1, bacon: 1, cheese: 1, beef: 1 },
  totalPrice: BASE_PRICE
};

const ingredientAdded = (state, action) => {
  const qty = state.ingredients[action.id];
  const updatedIngredients = {
    ...state.ingredients,
    [action.id]: qty + 1
  };
  const updatedTotalPrice =
    state.totalPrice + INGREDIENT_PRICES[action.id];
  return {
    ...state,
    ingredients: updatedIngredients,
    totalPrice: updatedTotalPrice
  };
};
const ingredientRemoved = (state, action) => {
  const qty = state.ingredients[action.id];
  // can't remove when qty <= 0
  if (qty <= 0) return;
  const updatedIngredients = {
    ...state.ingredients,
    [action.id]: qty - 1
  };
  const updatedTotalPrice =
    state.totalPrice - INGREDIENT_PRICES[action.id];
  return {
    ...state,
    ingredients: updatedIngredients,
    totalPrice: updatedTotalPrice
  };
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_ADDED:
      return ingredientAdded(state, action);
    case INGREDIENT_REMOVED:
      return ingredientRemoved(state, action);
    default:
      return state;
  }
};

export default burgerBuilderReducer;
