import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css'

const LoginPage = () => (
  <div>
    <h1 className={styles.theme}>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;