import { NavLink } from 'react-router-dom';

const StartMenu = () => {
  return (
    <div>
        <NavLink to="/register">Register</NavLink> |
        <NavLink to="/login"> Login</NavLink>
    </div>
  );
};

export default StartMenu;
