import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actions";

const BASE_PRICE = 4.99;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  beef: 1.3
};

const initialState = {
  ingredients: { salad: 1, bacon: 1, cheese: 1, beef: 1 },
  totalPrice: BASE_PRICE
};

const addIngredient = (state, action) => ({
  ...state,
  ingredients: {
    ...state.ingredients,
    [action.id]: state.ingredients[action.id] + 1
  }
});
const removeIngredient = (state, action) => ({
  ...state,
  ingredients: {
    ...state.ingredients,
    [action.id]: state.ingredients[action.id] - 1
  }
});

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    default:
      return state;
  }
};

export default burgerBuilderReducer;
