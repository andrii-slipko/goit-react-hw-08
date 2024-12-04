import React from 'react';
import Contact from '../Contact/Contact';  
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './ContactList.module.css'

const ContactList = ({ contacts }) => {
  const filter = useSelector(selectNameFilter);

  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />  
      ))}
    </ul>
  );
};

export default ContactList;