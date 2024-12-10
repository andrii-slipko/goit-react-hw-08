import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';  
import { selectFilteredContacts } from '../../redux/contacts/slice'; 
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts); 
  const loading = useSelector((state) => state.contacts.loading); 

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p> 
      )}
    </ul>
  );
};

export default ContactList;