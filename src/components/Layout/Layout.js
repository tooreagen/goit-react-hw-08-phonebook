import AuthNav from 'components/AuthNav/AuthNav';
import MainNav from 'components/MainNav/MainNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Container, Header } from './LayoutStyled';
import { Suspense } from 'react';
import { Loading } from 'components/Loading/Loading';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Header>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
