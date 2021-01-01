import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { noop } from '../../../../utils'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

function ProductForm({
  addProductButtonHandler,
  addProductInputHandler,
  updateProductButtonHandler,
  state,
  date,
  handleDateChange,
  handleModal,
  clearState
}) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Product Details
          </Typography>
          <React.Fragment>
            {state.isEditMode ? (
              <Typography variant='h6' gutterBottom>
                Edit Product Details
              </Typography>
            ) : (
              <Typography variant='h6' gutterBottom>
                Add New Product
              </Typography>
            )}
            <form className={classes.form} noValidate autoComplete='off'>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    type='text'
                    onChange={addProductInputHandler}
                    value={state.pName}
                    id='pName'
                    name='pName'
                    label='Product Name'
                    fullWidth
                    autoComplete='pName'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={2}
                    rowsMax={4}
                    value={state.pDescription}
                    onChange={addProductInputHandler}
                    id='pDescription'
                    name='pDescription'
                    label='Product Description'
                    fullWidth
                    autoComplete='pDescription'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    onChange={addProductInputHandler}
                    value={state.pCategory}
                    id='pCategory'
                    name='pCategory'
                    label='Product Category'
                    fullWidth
                    autoComplete='pCategory'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='number'
                    onChange={addProductInputHandler}
                    value={state.pPrice}
                    required
                    id='pPrice'
                    name='pPrice'
                    label='Product Price'
                    fullWidth
                    autoComplete='pPrice'
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify='space-around'>
                      <KeyboardDatePicker
                        disableToolbar
                        variant='inline'
                        format='MM/dd/yyyy'
                        margin='normal'
                        id='date-picker-inline'
                        label='Product Expiry'
                        value={date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
              <div className={classes.buttons}>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    handleModal()
                    clearState()
                  }}
                  className={classes.button}
                >
                  Cancel
                </Button>
                {state.isEditMode ? (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={updateProductButtonHandler}
                    className={classes.button}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    onClick={addProductButtonHandler}
                  >
                    Save
                  </Button>
                )}
              </div>
            </form>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}

ProductForm.propTypes = {
  addProductButtonHandler: PropTypes.func,
  addProductInputHandler: PropTypes.func,
  updateProductButtonHandler: PropTypes.func,
  state: PropTypes.instanceOf(Object),
  date: PropTypes.string,
  handleDateChange: PropTypes.func,
  handleModal: PropTypes.func,
  clearState: PropTypes.func
}

ProductForm.defaultProps = {
  addProductButtonHandler: noop,
  addProductInputHandler: noop,
  updateProductButtonHandler: noop,
  state: {},
  date: '',
  handleDateChange: noop,
  handleModal: noop,
  clearState: noop
}

export default ProductForm
