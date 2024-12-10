import { NavLink } from 'react-router-dom';
import  styles from './AuthNav.module.css'

const AuthNav = () => (
  <nav className={styles.nav}>
    <NavLink className={styles.link} to="/register">Register</NavLink>
    <NavLink className={styles.link} to="/login">Login</NavLink>
  </nav>
);

export default AuthNav;