import React from 'react';
import Contact from '../Contact/Contact';  
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import styles from './ContactList.module.css'

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />  
      ))}
    </ul>
  );
};

export default ContactList;