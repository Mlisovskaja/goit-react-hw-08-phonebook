import { NavLink } from 'react-router-dom';
import styles from './start-menu.module.css';

const StartMenu = () => {
  return (
    <div>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>{' '}
      |
      <NavLink className={styles.link} to="/login">
        {' '}
        Login
      </NavLink>
    </div>
  );
};

export default StartMenu;
