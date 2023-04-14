import AuthNav from 'components/AuthNav/AuthNav';
import MainNav from 'components/MainNav/MainNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Container, Navigation } from './LayoutStyled';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <header>
        <Navigation>
          <MainNav />
          <UserMenu />
          <AuthNav />
        </Navigation>
      </header>
      <Outlet />
    </Container>
  );
};

export default Layout;
