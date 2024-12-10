import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import { useState } from 'react';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      resetForm();
    } catch (error) {
      setServerError(error || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.box}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className={styles.input} />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div className={styles.box}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" className={styles.input} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <button type="submit" className={styles.button}>Log In</button>
        </Form>
      </Formik>
      {serverError && <p className={styles.serverError}>{serverError}</p>}
    </div>
  );
};

export default LoginForm;