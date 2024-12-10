import styles from './HomePage.module.css'
const HomePage = () => (
    <div>
      <h1 className={styles.theme}>Welcome to the Phonebook App</h1>
      <p className={styles.text}><span className={styles.text2}>Simple</span> app for managing your <span className={styles.text3}> contacts</span>.</p>
    </div>
  );
  
  export default HomePage;