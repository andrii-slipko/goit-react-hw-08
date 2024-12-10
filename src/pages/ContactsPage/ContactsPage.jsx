import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import styles from './ContactsPage.module.css'

const ContactsPage = () => (
  <div>
    <h1 className={styles.theme}>Contacts</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default ContactsPage;