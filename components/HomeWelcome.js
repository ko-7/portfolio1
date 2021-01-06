//Homeページ最上部の背景画像＋「Welcome to My Protfolio Site!」の部分

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '100px',
    position: 'relative',
    // paddingTop: 50,
  },
  media: {
    // paddingTop: '56.25%',
    paddingTop: '45%',
  },
  // filter: {
  //   paddingTop: '45%',
  //   hight: '100%',
  //   width: '100%',
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   backgroundColor: 'rgba(0,0,0,0.2)',
  // },
  // cardcontent: {
  //   position: 'absolute',
  //   top: '10%',
  //   left: 0,
  //   right: 0,
  // },
  // title: {
  //   fontSize: '250px',
  //   fontWeight: 'bold',
  //   textAlign: 'right',
  //   letterSpacing: '0px',
  //   color: '#fff',
  //   margin: '-32px 0px',
  // },
  // text: {
  //   fontSize: '150px',
  //   fontWeight: 'bold',
  //   textAlign: 'left',
  //   letterSpacing: '0px',
  //   color: '#fff',
  //   margin: '250px 0px 0px 0px',
  // }
});

export default function HomeWelcome() {
  const classes = useStyles();

  return (<div>
    <Card className={classes.root} elevation={0}>
      <CardMedia className={classes.media} image="/welcomeSea.png" />
      {/* <Card className={classes.filter} />
      <CardContent className={classes.cardcontent}>
      <Typography className={classes.title} align='center'>
        Portfolio
      </Typography>
      <Typography className={classes.text} align='center'>
        Shimura
      </Typography>
      </CardContent> */}
    </Card>
  </div>);
}