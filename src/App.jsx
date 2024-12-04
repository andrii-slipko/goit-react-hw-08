import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from './redux/contactsOps';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handleAddContact = async (newContact) => {
    try {
      dispatch(addContact(newContact));
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;