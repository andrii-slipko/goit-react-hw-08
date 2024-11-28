import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </PersistGate>
  </Provider>
);

export default App;