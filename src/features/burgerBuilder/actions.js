import axios from "../../common/axios-orders";

/* Actions types */
export const INGREDIENT_ADDED = "burgerBuilder/ingredientAdded";
export const INGREDIENT_REMOVED = "burgerBuilder/ingredientRemoved";
export const FETCH_INGREDIENTS_SUCCESS =
  "burgerBuilder/fetchIngredientsSuccess";
export const FETCH_INGREDIENTS_FAIL =
  "burgerBuilder/fetchIngredientsFail";
export const ORDER_STARTED = "burgerBuilder/orderStarted";
export const BUILDING_RESET = "burgerBuilder/buildingReset";

/* Sync action creators */
export const addIngredient = id => ({
  type: INGREDIENT_ADDED,
  id
});

export const removeIngredient = id => ({
  type: INGREDIENT_REMOVED,
  id
});

export const startOrder = id => ({
  type: ORDER_STARTED,
  authRedirectPath: "/checkout"
});

export const resetBuilding = () => ({
  type: BUILDING_RESET
});

/* Async action creators */

const fetchIngredientsSuccess = ingredients => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  ingredients
});

const fetchIngredientsFail = () => ({
  type: FETCH_INGREDIENTS_FAIL
});

export const initIngredients = () => {
  return dispatch => {
    return axios
      .get("/ingredients.json")
      .then(res => {
        dispatch(fetchIngredientsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchIngredientsFail());
      });
  };
};
