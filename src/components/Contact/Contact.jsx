import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.listItem}>
      <span>{contact.name}: {contact.number}</span>
      <button className={styles.button} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;