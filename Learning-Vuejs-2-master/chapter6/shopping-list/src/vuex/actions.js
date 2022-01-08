import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from './mutation_types'
import api from '../api'
import { getListById } from './getters'
/**
 * Fetches and populates shopping lists
 */
export const populateShoppingLists = ({ dispatch }) => {
  api.fetchShoppingLists().then(response => {
    dispatch(POPULATE_SHOPPING_LISTS, response.data)
  })
}
/**
 * Change the title of the shopping list
 * @param store
 * @param title
 * @param id
 */
export const changeTitle = (store, title, id) => {
  store.dispatch(CHANGE_TITLE, title, id)
  updateList(store, id)
}
/**
 * Update the shopping list by its id
 * @param store
 * @param id
 */
export const updateList = (store, id) => {
  var shoppingList = getListById(store.state, id)

  api.updateShoppingList(shoppingList)
}
/**
 * Create a new shopping list
 * @param dispatch
 * @param shoppingList
 */
export const createShoppingList = ({ dispatch }, shoppingList) => {
  api.addNewShoppingList(shoppingList).then(() => {
    populateShoppingLists({dispatch})
  })
}
/**
 * Remove the shopping list from the list
 * @param dispatch
 * @param id
 */
export const deleteShoppingList = ({ dispatch }, id) => {
  api.deleteShoppingList(id).then(() => {
    populateShoppingLists({dispatch})
  })
}
