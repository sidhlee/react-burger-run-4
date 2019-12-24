import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "./actions";

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

const burgerBuilderReducer = (state = initialState, action) => {};

export default burgerBuilderReducer;
