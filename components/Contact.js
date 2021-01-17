//キーボード入力内容をJSでいじる方法：https://material-ui.com/components/text-fields/
//フォームのバリデーションの付け方（formik,yup）：https://qiita.com/zaburo/items/61f3aa4cfb950a64f45e

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



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 80,
    color: 'black',
  }
})); 

export default function Contact() {

  const classes = useStyles();
  //↓　送信完了の状態を管理する変数？
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

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
        //↓Formで使う変数の定義
        initialValues={{ name: '', email: '', content: '' }}
        //↓送信ボタンが押されたら実行される関数 axios使用でAPIのやり取り
        onSubmit={(values, {setSubmitting}) => {
          const sendValues = {'name': values.name, 'email': values.email, 'content': values.content}
          values.name = ''
          values.email = ''
          values.content = ''

          //↓送信処理中かどうか監視してる？
          setSubmitting(true);
          //AWS apiのエンドポイントを変数に代入
          const api = "https://a94m3u3ukg.execute-api.ap-northeast-1.amazonaws.com/v2";
          //axios
          axios.post(api,
            sendValues,

            // ※↓↓　FrontにはCORS対策の記述は不要らしい（あるとCORSでエラーになる）
            // {
            //   headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Headers': '*',
            //     'Content-Type': 'application/json',
            //   }
            // },

          ).then((response) => {
            console.log(response)
            setSubmitionCompleted(true);
            alert('お問い合わせの送信が完了しました。')
          });
        }}

        //↓バリデーションの記述　各変数ごとにバリデーションの適用＋errorメッセージが指定できる。
        //　　バリデーションはYupにまとめられており、オブジェクトを指定するだけでOK
        validationSchema = { Yup.object().shape({
          email: Yup.string()
            .email('※形式が違います。メールアドレスを入力してください。')  //←メールの形式じゃなかったら表示される
            .required('※必須項目です。'),  //←何も入力されてなかったら表示される。
          content: Yup.string()
            .required('※必須項目です。')
        })}
      >
          {/* ↓Yupから関数をpropsとして渡している。 */}
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (

            <form onSubmit={handleSubmit}>
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
                        // onClick={(name,email,content) => sendMail(name,email,content)} //←Vueのまねしてみた。
                        type="submit"
                      >
                        送信
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </form>

          );
        }}
          {/* ) */}
        {/* } */}
      </Formik>

  </Box>);
}