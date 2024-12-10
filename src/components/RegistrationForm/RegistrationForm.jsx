import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';
import { useState } from 'react';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
    } catch (error) {
      if (error.includes('duplicate key error') || error.includes('already exists')) {
        setServerError('This email is already registered.');
      } else {
        setServerError('Registration failed. This Email is already used.');
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.box}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>
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
          <button type="submit" className={styles.button}>Register</button>
        </Form>
      </Formik>
      {serverError && <p className={styles.serverError}>{serverError}</p>}
    </div>
  );
};

export default RegistrationForm;