import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { render } from 'react-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return(<header>
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#fff",color:"#999"}} elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to my portfolio site
          </Typography>
          <Button color="inherit">Home</Button>
          {/* <Button color="inherit">About</Button> */}
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    <div>{props.header}</div>
    <h1>{props.title}</h1>
  </header>);
}