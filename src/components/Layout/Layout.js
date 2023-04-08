import { Outlet } from 'react-router-dom';
import { Container, NavigationLink } from './LayoutStyled';


const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavigationLink to="/register">Register</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};

export default Layout;
