import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { render } from 'react-dom';
import Link from 'next/link';
import Box from '@material-ui/core/Box'
import Drawer from './Drawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "#000",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return(<header>
    <div className={classes.root}> 
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Box display='flex' flexDirection="row-reverse">
          <Toolbar>
            {/* <Link href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit">About</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Contact</Button>
            <Link href='/test' >
              <Button color="inherit">Go to test</Button>
            </Link> */}

            <Drawer />
            
          </Toolbar>
        </Box>
      </AppBar>
    </div>
    <div>{props.header}</div>
    <h1>{props.title}</h1>
  </header>);
}