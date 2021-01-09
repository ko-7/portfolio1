import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Mail from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
    color: 'black',
    // backgroundColor: 'rgba(255,255,255,0.0)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  button: {
    border: 'solid 1px #333',
    borderRadius: 3,
  }
})); 

export default function FullWidthGrid() {
  const classes = useStyles();

  return (<Box className={classes.root}>

      <Box display="flex" justifyContent='center' textAlign="center" borderBottom={1} fontSize={32} my={5}>
        <Box mt={1} mr={1}><Mail fontSize='large' /></Box>
        <Box>Contact</Box>
      </Box>

      <Box  display='flex' justifyContent='center'>
        <Typography gutterBottom variant="h6" component="h2">
          お気軽にご連絡ください。          
        </Typography>
      </Box>

      <form noValidate autoComplete="off">
        <Grid container spacing={5} justify='center'>
          <Grid item xs={12} sm ={9} md={9} lg={6} spacing={2}>
            <TextField id="name" label="氏名 [任意]" />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify='center'>
          <Grid item xs={12} sm ={9} md={9} lg={6} spacing={2}>
            <TextField id="mailAddress" label="メールアドレス [任意]" />
          </Grid>
        </Grid>
        <Grid container spacing={5} justify='center'>
          <Grid item xs={12} sm ={9} md={9} lg={6}>
            <Box mt={3}>
              <TextField id="inquiryContent" label="お問い合わせ内容 [必須]" multiline rows={5} variant='outlined' fullWidth />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify='center'>
          <Grid item xs={5} sm ={5} md={3} lg={3}>
            <Button variant='contained' size='medium' color='primary' endIcon={<Icon>send</Icon>} fullWidth>送信</Button>
          </Grid>
        </Grid>
      </form>

  </Box>);
}