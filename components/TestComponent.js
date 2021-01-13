// import React from 'react';
// import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';

// const useStyles = makeStyles({
//   oya: {
//     width: 300,
//     height: 300,
//     minWidth: 275,
//     backgroundColor: 'Blue',
//     position: 'relative',
//   },
//   kodomo: {
//     width: 50,
//     height: 50, 
//     backgroundColor: 'pink',
//     position: 'absolute',
//     top: '30%',
//     right: '30%',
//   },
//   lkodomo: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'pink',
//     position: 'absolute',
//     top: '30%',
//     right: '80%',
//   }
// });

// function Tweet(props){
//   return(
//     <div>{props.content}</div>
//   )
// }

// export default function SimpleCard() {
//   const classes = useStyles();  

//   return (<div>

//     <Card className={classes.oya}>
//       <Card className={classes.kodomo}></Card>
//       <Card className={classes.lkodomo}></Card>
//     </Card>
//     <Tweet content='コンテツ' />

//   </div>);
// }

//Formのテスト　表示とReactでの値受け取りまでできた
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import { StoreMallDirectoryOutlined } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function StateTextFields() {
//   const classes = useStyles();

//   const [name, setName] = React.useState('');
//   const handleChangeName = (event) => {
//     setName(event.target.value);
//   };
//   const [mail, setMail] = React.useState('');
//   const handleChangeMail = (event) => {
//     setMail(event.target.value);
//   };
//   const [content, setContent] = React.useState('');
//   const handleChangeContent = (event) => {
//     setContent(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField id="standard0" label="Name" value={name} onChange={handleChangeName} />
//       </div>
//       <div>
//         <TextField id="standard1" label="Mail" value={name} onChange={handleChangeName} />
//       </div>
//       <div>
//         <TextField id="standard0" label="Content" value={mail} onChange={handleChangeMail} />
//       </div>
//     </form>
//   );
// }




import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
// import { DisplayFormikState } from './formikHelper';

const styles = {

};

const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;


function Contact(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
  
  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setSubmitionCompleted(false);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Contact us!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {!isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Contact</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Send us a comment!
              </DialogContentText>
              <Formik
                initialValues={{ email: '', name: '', comment: '' }}
                onSubmit={(values, { setSubmitting }) => {
                   setSubmitting(true);
                  axios.post(contactFormEndpoint,
                    values,
                    {
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                      }
                    },
                  ).then((resp) => {
                    setSubmitionCompleted(true);
                  }
                  );
                }}

                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required('Required'),
                  name: Yup.string()
                    .required('Required'),
                  comment: Yup.string()
                    .required('Required'),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        label="name"
                        name="name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.name && touched.name) && errors.name}
                        margin="normal"
                      />

                      <TextField
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.email && touched.email) && errors.email}
                        margin="normal"
                      />

                      <TextField
                        label="comment"
                        name="comment"
                        className={classes.textField}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                      />
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                        {/* <DisplayFormikState {...props} /> */}
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        }
        {isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Thanks
              </DialogContentText>
              <DialogActions>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleClose}
                >
                  Back to app
                  </Button>
                {/* <DisplayFormikState {...props} /> */}
              </DialogActions>
            </DialogContent>
          </React.Fragment>}
      </Dialog>
    </React.Fragment >
  );
}

export default withStyles(styles)(Contact);