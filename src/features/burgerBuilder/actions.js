/* Actions types */
export const INGREDIENT_ADDED = "burgerBuilder/ingredientAdded";
export const INGREDIENT_REMOVED = "burgerBuilder/ingredientRemoved";

/* Action creators */
export const addIngredient = id => ({
  type: INGREDIENT_ADDED,
  id
});

export const removeIngredient = id => ({
  type: INGREDIENT_REMOVED,
  id
});
