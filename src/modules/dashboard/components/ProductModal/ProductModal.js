import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import ProductForm from '../ProductForm/ProductForm'
import { noop } from '../../../../utils'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const ProductModal = ({
  open,
  handleModal,
  addProductButtonHandler,
  addProductInputHandler,
  updateProductButtonHandler,
  handleDateChange,
  state,
  date,
  clearState
}) => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <ProductForm
            addProductButtonHandler={() => {
              addProductButtonHandler()
              handleModal()
            }}
            addProductInputHandler={addProductInputHandler}
            updateProductButtonHandler={updateProductButtonHandler}
            handleDateChange={handleDateChange}
            state={state}
            date={date}
            handleModal={handleModal}
            clearState={clearState}
          />
        </Fade>
      </Modal>
    </div>
  )
}

ProductModal.propTypes = {
  open: PropTypes.bool,
  handleModal: PropTypes.func,
  addProductButtonHandler: PropTypes.func,
  addProductInputHandler: PropTypes.func,
  updateProductButtonHandler: PropTypes.func,
  handleDateChange: PropTypes.func,
  state: PropTypes.instanceOf(Object),
  date: PropTypes.string,
  clearState: PropTypes.func
}

ProductModal.defaultProps = {
  open: false,
  handleModal: noop,
  addProductButtonHandler: noop,
  addProductInputHandler: noop,
  updateProductButtonHandler: noop,
  handleDateChange: noop,
  state: {},
  date: '',
  clearState: noop
}

export default ProductModal
