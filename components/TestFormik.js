import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

export default function MyForm() {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [content, setContent] = React.useState('');

  return (<div>
    <h2>My Form</h2>
    <Formik
      initialValues={{ name: '', email: '', content: '' }}
      onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
          // name: Yup.string().required('パスワードは必須です。'),
          email: Yup.string().email('emailの形式がおかしいです。').required('emailは必須です。'),
          content: Yup.string().required('お問い合わせ内容は必須です。')
      })}
    >
      {
        ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            /><br />
            {touched.name && errors.name ? <div>{errors.name}</div> : null}
            <TextField 
                  id="name" 
                  label="氏名 [任意]" 
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  value={values.name} 
                  fullWidth
                  helperText='test'
                />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            /><br />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /><br />
            {touched.password && errors.password ? <div>{errors.password}</div> : null}
            <button type="submit">Submit</button>
          </form>
        )
      }
    </Formik>
  </div>);
    
}