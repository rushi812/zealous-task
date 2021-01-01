import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { noop } from '../../../utils'
import ProductListContainer from './ProductList/ProductListContainer'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

const Dashboard = ({ removeButtonHandler, editButtonHandler, handleModal }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary' onClick={handleModal}>
        Add New Product
      </Button>
      <ProductListContainer
        removeButtonHandler={removeButtonHandler}
        editButtonHandler={editButtonHandler}
      />
    </div>
  )
}

Dashboard.propTypes = {
  removeButtonHandler: PropTypes.func,
  editButtonHandler: PropTypes.func,
  handleModal: PropTypes.func
}

Dashboard.defaultProps = {
  removeButtonHandler: noop,
  editButtonHandler: noop,
  handleModal: noop
}

export default Dashboard
