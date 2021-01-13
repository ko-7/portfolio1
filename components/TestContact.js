//キーボード入力内容をJSでいじる方法：https://material-ui.com/components/text-fields/
//フォームのバリデーションの付け方（formik,yup）：https://qiita.com/zaburo/items/61f3aa4cfb950a64f45e
//フォームとaxiosの連携：https://medium.com/codefully-io/react-forms-validation-with-formik-and-material-ui-1adf0c1cae5c

import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Mail from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { SettingsSystemDaydream } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
    color: 'black',
    // backgroundColor: 'rgba(255,255,255,0.0)',
  }
})); 



export default function Contact() {
  const classes = useStyles();

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

      <Formik
        initialValues={{ name: '', email: '', content: '' }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2)); //　←意味不明
        }}
        validationSchema = { Yup.object().shape({
          email: Yup.string().email('※形式が違います。メールアドレスを入力してください。').required('※必須項目です。'),
          content: Yup.string().required('※必須項目です。')
        })}
      >
        {
          ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (

            <form noValidate autoComplete="off">
              <Grid container justify='center'>
                <Grid item container xs={12} sm={12} md={10} lg={8} spacing={5} spacing={5} justify='center'>

                  <Grid item container spacing={5}>
                    <Grid item xs={12} sm ={7} md={5} lg={6} spacing={2}>
                      <TextField 
                        // id="name"
                        name='name' 
                        label="氏名 [任意]" 
                        value={values.name} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid item container spacing={5}>
                    <Grid item xs={12} sm ={7} md={5} lg={6} spacing={2}>
                      <TextField 
                        // id="mailAddress" 
                        name='email'
                        label="メールアドレス [必須]" 
                        value={values.email} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        error={errors.email && touched.email}
                        helperText={(errors.email && touched.email) && errors.email}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid item container spacing={5}>
                    <Grid item xs={12}>
                      <Box mt={3}>
                        <TextField 
                          // id="inquiryContent" 
                          name='content'
                          label="お問い合わせ内容 [必須]" 
                          value={values.content} 
                          onChange={handleChange}
                          onBlur={handleBlur} 
                          multiline rows={5} rowsMax={10}
                          variant='outlined' 
                          error={errors.content && touched.content}
                          helperText={(errors.content && touched.content) && errors.content}
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

          )
        }
      </Formik>

  </Box>);
}