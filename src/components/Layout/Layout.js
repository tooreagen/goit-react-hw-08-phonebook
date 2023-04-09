import AuthNav from 'components/AuthNav/AuthNav';
import MainNav from 'components/MainNav/MainNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { Container, Navigation } from './LayoutStyled';

const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <MainNav/>
          <AuthNav />
          <UserMenu />
        </Navigation>
      </header>
      <Outlet />
    </Container>
  );
};

export default Layout;
