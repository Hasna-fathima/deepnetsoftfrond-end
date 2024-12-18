import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import '/src/Components/Signup.Login.css';
import { useNavigate } from 'react-router-dom';


const AdminSignup = () => {

  const navigate=useNavigate()
  const initialValues = {
  
    username:'',
    email: '',
    password: '',
    
  };

  const validationSchema = Yup.object().shape({
    
    username: Yup.string().max(10, 'Must be 10 characters or less').required('Required'),
    email: Yup.string().email('Please use a valid email address.').required('Email address is required.'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters.'),
    
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      
      const response = await axios.post('http://localhost:3000/api/admin/signup', values);


      console.log('Form submitted: ', response.data);
      navigate('/login')
      resetForm();

      setSubmitting(false);
    } catch (error) {
    
      console.error('Error submitting form: ', error);
  
    }
  };

  return (
    <div className='container'>
      <h3>Signup</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form>
        

             <label htmlFor="username">username</label>
            <Field type="text" name="username" onChange={handleChange} />
            <ErrorMessage className="error" name="username" component="div" /><br/>

            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" onChange={handleChange} />
            <ErrorMessage className="error" name="email" component="div" /><br/>

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" onChange={handleChange} />
            <ErrorMessage className="error" name="password" component="div" /><br/>

  

            <button type='submit'>Signup</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminSignup