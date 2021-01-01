import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductList from './ProductList'
import { noop } from '../../../../utils'

const ProductListContainer = ({
  products,
  removeButtonHandler,
  editButtonHandler
}) => {
  return (
    <ProductList
      products={products}
      removeButtonHandler={removeButtonHandler}
      editButtonHandler={editButtonHandler}
    />
  )
}

ProductListContainer.propTypes = {
  products: PropTypes.instanceOf(Array),
  removeButtonHandler: PropTypes.func,
  editButtonHandler: PropTypes.func
}

ProductListContainer.defaultProps = {
  products: [],
  removeButtonHandler: noop,
  editButtonHandler: noop
}

const mapStateToProps = (state) => ({
  products: state.app.products
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer)
