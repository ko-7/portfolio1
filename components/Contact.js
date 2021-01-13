import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Mail from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { SettingsSystemDaydream } from '@material-ui/icons';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage, } from 'formik';
// import * as Yup from 'yup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
    color: 'black',
    // backgroundColor: 'rgba(255,255,255,0.0)',
  }
})); 

const sendMail = (name,mailAddress,content) => {
  
}



export default function FullWidthGrid() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const [mail, setMail] = useState('');
  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };
  const [content, setContent] = useState('');
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const sendMail = () => {
    // メールのバリデーション

  }

  return (<Box className={classes.root}>

      <Box display="flex" justifyContent='center' textAlign="center" borderBottom={1} fontSize={32} my={5}>
        <Box mt={1} mr={1}><Mail fontSize='large' /></Box>
        <Box>Contact</Box>
      </Box>

      <Box  display='flex' justifyContent='center' mb={5}>
        <Typography gutterBottom variant="h6" component="h2">
          お気軽にご連絡ください。          
        </Typography>
      </Box>

      <form noValidate autoComplete="off">
        <Grid container justify='center'>
          <Grid item container xs={12} sm={12} md={10} lg={8} spacing={5} spacing={5} justify='center'>

            <Grid item container spacing={5}>
              <Grid item xs={12} sm ={7} md={5} lg={6} spacing={2}>
                <TextField 
                  id="name" 
                  label="氏名 [任意]" 
                  value={name} 
                  onChange={handleChangeName} 
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item container spacing={5}>
              <Grid item xs={12} sm ={7} md={5} lg={6} spacing={2}>
                <TextField 
                  id="mailAddress" 
                  label="メールアドレス [必須]" 
                  value={mail} 
                  onChange={handleChangeMail} 
                  required='true' 
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item container spacing={5}>
              <Grid item xs={12}>
                <Box mt={3}>
                  <TextField 
                    id="inquiryContent" 
                    label="お問い合わせ内容 [必須]" 
                    value={content} 
                    onChange={handleChangeContent} 
                    required='true' 
                    multiline rows={5} rowsMax={10}
                    variant='outlined' 
                    fullWidth />
                </Box>
              </Grid>
            </Grid>

            <Grid item container spacing={5} justify='center'>
              <Grid item xs={12} sm ={5} md={3} lg={3}>
                {/* <Button variant='outlined' size='medium' color='primary' endIcon={<Icon>send</Icon>} fullWidth>送信</Button> */}
                <Button 
                  variant='contained' 
                  size='medium' 
                  color='primary' 
                  endIcon={<Icon>send</Icon>} 
                  fullWidth
                >
                  送信
                </Button>
              </Grid>
            </Grid>


          </Grid>
        </Grid>
      </form>

  </Box>);
}