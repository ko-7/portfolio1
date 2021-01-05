import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  oya: {
    width: 300,
    height: 300,
    minWidth: 275,
    backgroundColor: 'Blue',
    position: 'relative',
  },
  kodomo: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    top: '30%',
    right: '30%',
  },
  lkodomo: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    top: '30%',
    right: '80%',
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.oya}>
      <Card className={classes.kodomo}></Card>
      <Card className={classes.lkodomo}></Card>
    </Card>
  );
}