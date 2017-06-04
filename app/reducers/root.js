const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return recipes.concat({name: action.name})

    default:
      return recipes
  }

  return recipes
}

const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      }
      return ingredients.concat(newIngredient)

    default:
      return ingredients
  }

  return ingredients
}

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
})
