import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import DeleteIcon from '@material-ui/icons/Delete'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import EditIcon from '@material-ui/icons/Edit'
import { noop } from '../../../../utils'

const useStyles = makeStyles((theme) => ({
  block: {
    display: 'block',
    wordWrap: 'break-word'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.background.paper
  },
  purple: {
    color: '#fff',
    backgroundColor: '#3f51b5',
    padding: '1.5rem',
    marginRight: '1.3rem'
  },
  icon: {
    marginTop: '10px'
  }
}))

function ProductList({ editButtonHandler, removeButtonHandler, products }) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xl'>
      <CssBaseline />
      <div className={classes.paper}>
        {products &&
          products.map((product) => {
            return (
              <List key={product.id}>
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar className={classes.purple}>
                      <PermContactCalendarIcon fontSize='large' />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        component='span'
                        variant='h4'
                        color='textPrimary'
                      >
                        {product.pName}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component='p'
                        variant='body2'
                        className={classes.block}
                        color='textSecondary'
                      >
                        {product.pDescription}
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        component='p'
                        variant='body2'
                        color='textPrimary'
                      >
                        Expiry: {product.pExpiry}
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        component='p'
                        variant='body2'
                        color='textPrimary'
                      >
                        Price: {product.pPrice}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={(event) => editButtonHandler(event, product)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={(event) =>
                        removeButtonHandler(event, product.id)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant='inset' component='li' />
              </List>
            )
          })}
      </div>
    </Container>
  )
}

ProductList.propTypes = {
  editButtonHandler: PropTypes.func,
  removeButtonHandler: PropTypes.func,
  products: PropTypes.instanceOf(Array)
}

ProductList.defaultProps = {
  editButtonHandler: noop,
  removeButtonHandler: noop,
  products: []
}

export default ProductList
