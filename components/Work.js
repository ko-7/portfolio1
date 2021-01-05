import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    dispray: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 180,
    width: 320,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (<Box className={classes.root}>
    <Box textAlign="center" color='black' borderBottom={1} fontSize={32} borderColor="primary.main">制作物</Box>
    <Box display='flex' justifyContent='center' m={4} textAlign='center'>
      <Card className={classes.card} elevation={0}>
        <CardActionArea href="https://master.d9x0i09i3pzy1.amplifyapp.com/">
          <CardMedia className={classes.media} image="/typingmogura2.png" title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              タイピングゲーム
            </Typography>
            <Typography color='textSecondary'>
              html, css, javascript, AWS Amplify
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.card} elevation={0}>
        <CardActionArea href="https://karacafe.wixsite.com/salon">
          <CardMedia className={classes.media} image="/wixSalon.png" title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              エステサロン
            </Typography>
            <Typography color='textSecondary'>
              wix使用
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>

    
  </Box>);
}