import { createStore } from 'redux'

const initialState = {
  recipes: [
    {
      name: 'Omelette'
    }
  ],
  ingredients: [
    {
      recipe: 'Omelette',
      name: 'Egg',
      quantity: 2
    }
  ]
}

// Action Creators
const addRecipe = (name) => ({
  type: 'ADD_RECIPE',
  name
})

const addIngredient = (recipe, name, quantity) => ({
  type: 'ADD_INGREDIENT',
  recipe,
  name,
  quantity
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign(
        {},
        state,
        { recipes: state.recipes.concat({name: action.name})
        }
      )
    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      }

      return Object.assign(
        {},
        state,
        { ingredients: state.ingredients.concat(newIngredient) }
      )
  }

  return state
}

const store = createStore(reducer, initialState)

window.store = store
