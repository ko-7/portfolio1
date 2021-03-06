//Aboutの部分

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AccesibilityNew from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
    color: 'black',
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

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent='center' textAlign="center" borderBottom={1} fontSize={32} my={5}>
        <Box mt={1} mr={1}><AccesibilityNew fontSize='large' /></Box>
        <Box>About</Box>
      </Box>

      <Grid container spacing={3} justify='center'>
        <Grid item xs={7} sm={4} md={3} lg={2}>
            <Avatar className={classes.avatar} alt="myphoto" src="/totoro.png" />
        </Grid>
        <Grid item xs={12} sm={7} md={5} lg={4}>
          <Typography>
              Shimura Kou<br /><br />
              活動地域 ： 浜松<br />
              スキル　 ： React, Next.js, AWS(EC2, Amplify)<br />
              趣味　　 ： アコースティックギター <br />
              <br />
              2018年10月からHTML,CSS,JavaScriptの勉強をはじめ、
              rails、AWS（EC2、Amplify)、Vueを触り、
              現在はReactでwebページを作成しています。<br />
            </Typography>
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='center' m={3}>
        <Button href="https://github.com/ko-7" className={classes.button} style={{marginRight:"10px"}}>
          <GitHubIcon size={16} style={{marginRight: '10px'}}/>
          Github
        </Button>
        <Button href="https://qiita.com/ko-7" className={classes.button}>
          <img width='25px' src="/qiita.png" style={{marginRight: '10px'}} />
          Qiita
        </Button>
      </Box>
    </div>
  );
}