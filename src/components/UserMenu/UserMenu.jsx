import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import styles from './user-menu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.usermenu}>
      <p>Hi, {email} </p>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
