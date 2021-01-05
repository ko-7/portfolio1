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
    // marginTop: '50px',
    marginBottom: '100px',
    position: 'relative',
  },
  media: {
    paddingTop: '20%',
  },
  filter: {
    paddingTop: '56.25%',
    hight: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
  cardcontent: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 36,
    color: '#000',
    align: 'center',
  },
});

export default function HomeWelcome() {
  const classes = useStyles();

  return (
    <Card className={classes.root} color="primary" elevation={0} square>
      <CardMedia className={classes.media} image="/homeTop.png" />
      <Card className={classes.filter} />
      <CardContent className={classes.cardcontent}>
        <Typography className={classes.title} align='center'>
          Welcome to My Portfolio Site!
        </Typography>
      </CardContent>
    </Card>
  );
}