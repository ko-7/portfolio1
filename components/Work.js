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
import LaptopChromebook from '@material-ui/icons/LaptopChromebook';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    marginBottom: 80,
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

    <Box display="flex" justifyContent='center' textAlign="center" color='black' borderBottom={1} fontSize={32} my={5}>
      <Box mt={1} mr={1}><LaptopChromebook fontSize='large' /></Box>
      <Box>Works</Box>
    </Box>

    <Grid container spacing={1}>

      <Grid item xs={12} sm ={6} md={4} lg={4}>
        <Box  display='flex' justifyContent='center'>
          <Card className={classes.card} elevation={0}>
            <CardActionArea href="https://master.d3it6b0ss4wmh5.amplifyapp.com/">
              <CardMedia className={classes.media} image="/portfolio.png" title="Contemplative Reptile" />
              <CardContent>
                <Box textAlign='center'>
                  <Typography gutterBottom variant="h6" component="h2">
                    ポートフォリオサイト<br />(このサイトです)
                  </Typography>
                </Box>
                <Typography color='textSecondary'>
                  Next.js、Material-ui、AWS Amplify
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm ={6} md={4} lg={4}>
        <Box  display='flex' justifyContent='center'>
          <Card className={classes.card} elevation={0}>
            <CardActionArea href="https://master.d9x0i09i3pzy1.amplifyapp.com/">
              <CardMedia className={classes.media} image="/typingmogura2.png" title="Contemplative Reptile" />
              <CardContent>
                <Box textAlign='center'>
                  <Typography gutterBottom variant="h6" component="h2">
                    タイピングゲーム
                  </Typography>
                </Box>
                <Typography color='textSecondary'>
                  html, css, javascript, AWS Amplify
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm ={6} md={4} lg={4}>
        <Box  display='flex' justifyContent='center'>
          <Card className={classes.card} elevation={0}>
            <CardActionArea href="https://karacafe.wixsite.com/salon">
              <CardMedia className={classes.media} image="/wixSalon.png" title="Contemplative Reptile" />
              <CardContent>
                <Box textAlign='center'>
                  <Typography gutterBottom variant="h6" component="h2">
                    エステサロン
                  </Typography>
                </Box>
                <Typography color='textSecondary'>
                  wix使用
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm ={6} md={4} lg={4}>
        <Box  display='flex' justifyContent='center'>
          <Card className={classes.card} elevation={0}>
            <CardActionArea href="https://master.d3it6b0ss4wmh5.amplifyapp.com/">
              <CardMedia className={classes.media} image="/ggOnline0.png" title="Contemplative Reptile" />
              <CardContent>
                <Box textAlign='center'>
                  <Typography gutterBottom variant="h6" component="h2">
                    英会話教室
                  </Typography>
                </Box>
                <Typography color='textSecondary'>
                  Vue、Vuetify、AWS Amplify
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>

    </Grid>

  </Box>);
}