import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'PrivateRoute';
import PublicRoute from 'PublicRoute';

const HomePage = lazy(()=>import("pages/HomePage"))
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}