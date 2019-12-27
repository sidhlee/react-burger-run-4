import * as types from "./actions";

const BASE_PRICE = 4.99;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  beef: 1.3
};

/* Reducers should own the state shape */
const initialState = {
  ingredients: null,
  totalPrice: BASE_PRICE,
  fetchError: false,
  building: false
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
    totalPrice: updatedTotalPrice,
    building: true
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
    totalPrice: updatedTotalPrice,
    building: true
  };
};
const fetchIngredientsSuccess = (state, action) => {
  return {
    ...state,
    // re-ordering ingredients fetched from firebase
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      beef: action.ingredients.beef
    },
    fetchIngredientsSuccess: false,
    totalPrice: 4.99
  };
};

const fetchIngredientsFail = (state, action) => {
  return {
    ...state,
    fetchError: true
  };
};

const orderStarted = (state, action) => {
  return {
    ...state,
    building: true
  };
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INGREDIENT_ADDED:
      return ingredientAdded(state, action);
    case types.INGREDIENT_REMOVED:
      return ingredientRemoved(state, action);
    case types.FETCH_INGREDIENTS_SUCCESS:
      return fetchIngredientsSuccess(state, action);
    case types.FETCH_INGREDIENTS_FAIL:
      return fetchIngredientsFail(state, action);
    case types.ORDER_STARTED:
      return orderStarted(state, action);
    default:
      return state;
  }
};

export default burgerBuilderReducer;
