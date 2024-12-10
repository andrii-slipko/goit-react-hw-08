import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import styles from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.box}>
      <span className={styles.text}>Welcome, {userName}!</span>
      <button className={styles.btn} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;