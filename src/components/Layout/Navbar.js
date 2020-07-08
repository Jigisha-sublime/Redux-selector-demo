import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles()

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Redux selector demo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar