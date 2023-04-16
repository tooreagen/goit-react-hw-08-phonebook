import { NavigationLink } from 'components/MainNav/MainNavStyled';

const AuthNav = () => {
  return (
    <nav>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Login</NavigationLink>
    </nav>
  );
};

export default AuthNav;
