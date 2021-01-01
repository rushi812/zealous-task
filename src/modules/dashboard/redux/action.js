import * as actionTypes from './actionTypes'

export const dateChange = (date) => ({
  type: actionTypes.DATE_CHANGE,
  payload: date
})

export const addProduct = (productDetails) => ({
  type: actionTypes.ADD_PRODUCT,
  payload: productDetails
})

export const deleteProduct = (id) => ({
  type: actionTypes.DELETE_PRODUCT,
  payload: id
})

export const updateProduct = (updatedProductDetails) => ({
  type: actionTypes.UPDATE_PRODUCT,
  payload: updatedProductDetails
})
