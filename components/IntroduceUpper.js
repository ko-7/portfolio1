//Home画面の自己紹介

import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '80px',
    margin: '80px 20px 0 20px',
  },
  flex: {
    display: 'flex',
    margin: '20px 0px'
  },
  title: {
    fontSize: 14,
  },
  avatar: {
    display: 'flex',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  button: {
    border: 'solid 1px #333',
    borderRadius: 3,
  }
}));

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.flex}>
        <div>
          <Avatar className={classes.avatar} alt="myphoto" src="/avatar.jpg" />
        </div>
        <div style={{marginLeft:40}}>
          <Typography variant="body2" component="p">
            {/* 名前　　 ： 志村　鴻(しむら　こう)<br /> */}
            <br />
            活動地域 ： 浜松<br />
            スキル　 ： React, Next.js, AWS(EC2, Amplify)<br />
            趣味　　 ： アコースティックギター <br />
            一言　　 ： Windowsが好きです。<br />
          </Typography>
          <CardActions className={classes.flex}>
            <Button href="https://github.com/ko-7" className={classes.button} style={{marginRight:"10px"}}>
              <GitHubIcon size={16} style={{marginRight: '10px'}} />
              Github
            </Button>
            <Button href="https://qiita.com/ko-7" className={classes.button}>
              <img width='25px' src="/qiita.png" style={{marginRight: '10px'}} />
              Qiita
            </Button>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}