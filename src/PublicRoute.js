import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirects = isLoggedIn && restricted;
return shouldRedirects ? <Navigate to="/contacts" /> : <>{children}</>;};

export default PublicRoute;
