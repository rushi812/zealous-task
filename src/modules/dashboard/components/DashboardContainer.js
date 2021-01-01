import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Dashboard from './Dashboard'
import { formatedDate, noop } from '../../../utils'
import * as action from '../redux/action'
import ProductModal from './ProductModal/ProductModal'

class DashboardContainer extends Component {
  state = {
    pName: '',
    pDescription: '',
    pCategory: '',
    pPrice: 0,
    pExpiry: '',
    open: false,
    isEditMode: false
  }

  handleModal = () => {
    const { open } = this.state
    this.setState({
      open: !open
    })
  }

  clearState = () => {
    this.setState({
      pName: '',
      pDescription: '',
      pCategory: '',
      pPrice: 0,
      pExpiry: '',
      open: false,
      isEditMode: false
    })
  }

  addProductInputHandler = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleDateChange = (date) => {
    const { dateChange } = this.props
    const newDate = formatedDate(date)
    dateChange(newDate)

    this.setState({
      pExpiry: formatedDate(date)
    })
  }

  addProductButtonHandler = () => {
    const { addProduct } = this.props
    const productDetails = {
      id: uuidv4(),
      ...this.state
    }
    addProduct(productDetails)
    this.clearState()
  }

  removeButtonHandler = (e, id) => {
    const { deleteProduct } = this.props
    deleteProduct(id)
  }

  editButtonHandler = (e, product) => {
    const { id, pName, pDescription, pCategory, pPrice, pExpiry } = product
    this.setState({
      id,
      pName,
      pDescription,
      pCategory,
      pPrice,
      pExpiry,
      isEditMode: true
    })
    this.handleModal()
  }

  updateProductButtonHandler = async () => {
    const { updateProduct } = this.props
    const { id, pName, pDescription, pCategory, pPrice, pExpiry } = this.state
    const updatedProductDetails = {
      id,
      pName,
      pDescription,
      pCategory,
      pPrice,
      pExpiry
    }
    console.log('RB:: updated product', updatedProductDetails)
    await updateProduct(updatedProductDetails)
    this.handleModal()
    this.clearState()
  }

  render() {
    const { date } = this.props
    const { open } = this.state
    return (
      <>
        <Dashboard
          addProductButtonHandler={this.addProductButtonHandler}
          addProductInputHandler={this.addProductInputHandler}
          handleDateChange={this.handleDateChange}
          state={this.state}
          date={date}
          removeButtonHandler={this.removeButtonHandler}
          editButtonHandler={this.editButtonHandler}
          handleModal={this.handleModal}
        />
        <ProductModal
          open={open}
          handleModal={this.handleModal}
          addProductButtonHandler={this.addProductButtonHandler}
          addProductInputHandler={this.addProductInputHandler}
          updateProductButtonHandler={this.updateProductButtonHandler}
          handleDateChange={this.handleDateChange}
          state={this.state}
          date={date}
          clearState={this.clearState}
        />
      </>
    )
  }
}

DashboardContainer.propTypes = {
  date: PropTypes.string,
  dateChange: PropTypes.func,
  addProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  updateProduct: PropTypes.func
}

DashboardContainer.defaultProps = {
  date: '',
  dateChange: noop,
  addProduct: noop,
  deleteProduct: noop,
  updateProduct: noop
}

const mapStateToProps = (state) => ({
  date: state.app.date
})

const mapDispatchToProps = (dispatch) => ({
  dateChange: (date) => dispatch(action.dateChange(date)),
  addProduct: (productDetails) => dispatch(action.addProduct(productDetails)),
  deleteProduct: (id) => dispatch(action.deleteProduct(id)),
  updateProduct: (updatedProductDetails) =>
    dispatch(action.updateProduct(updatedProductDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
