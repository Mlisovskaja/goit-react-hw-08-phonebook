import { useSelector } from 'react-redux';

import { isUserLogin } from '../../redux/auth/auth-selectors';
import StartMenu from 'components/StartMenu/StartMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const NavBar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <>
      {!isLogin && <StartMenu />}
      {isLogin && <UserMenu />}
    </>
  );
};

export default NavBar;
