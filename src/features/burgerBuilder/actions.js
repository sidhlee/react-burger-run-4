/* Actions types */
export const ADD_INGREDIENT = "burgerBuilder/addIngredient";
export const REMOVE_INGREDIENT = "burgerBuilder/removeIngredient";

/* Action creators */
export const addIngredient = id => ({
  type: ADD_INGREDIENT,
  id
});

export const removeIngredient = id => ({
  type: REMOVE_INGREDIENT,
  id
});
