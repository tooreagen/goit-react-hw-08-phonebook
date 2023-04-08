import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import Home from 'pages/Home';
import AuthRegister from 'pages/AuthRegister';
import AuthLogin from 'pages/AuthLogin';
import Layout from './Layout/Layout';
import Contacts from 'pages/Contacts';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

//label що з ними робити?