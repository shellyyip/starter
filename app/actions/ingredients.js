export const addIngredient = (recipe, name, quantity) => ({
  type: 'ADD_INGREDIENT',
  recipe,
  name,
  quantity
})
