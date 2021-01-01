import * as actionTypes from './actionTypes'
import { formatedDate } from '../../../utils/index'

const INITIAL_STATE = {
  products: [],
  date: formatedDate(new Date())
}

const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.DATE_CHANGE:
      return {
        ...state,
        date: formatedDate(payload)
      }
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload]
      }
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((x) => x.id !== payload)
      }
    case actionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((x) =>
          x.id === payload.id
            ? {
                ...payload
              }
            : x
        )
      }
    default:
      return state
  }
}

export default appReducer
