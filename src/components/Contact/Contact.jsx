import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setModalOpen(false);
  };

  return (
    <li className={styles.listItem}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => setModalOpen(true)} className={styles.button}>Delete</button>

      <ConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={handleDelete} 
      />
    </li>
  );
};

export default Contact;