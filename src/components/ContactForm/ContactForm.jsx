import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';  


const validationSchema = Yup.object({
  name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: Date.now().toString(), 
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact)); 
    resetForm(); 
  };


  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} 
    >
      <Form className={styles.form}>
        <div className={styles.box}>
          <label htmlFor="name">Name</label>
          <Field
            className={styles.input}
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div className={styles.box}>
          <label htmlFor="number">Number</label>
          <Field
            className={styles.input}
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </div>

        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;