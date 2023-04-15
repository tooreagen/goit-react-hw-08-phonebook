import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Layout from './Layout/Layout';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { currentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from 'PublicRoute';


export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      ukrainetop
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

//email: ukraine@ukraine.ua
//pass:  ukrainetop

//label що з ними робити?
//информування коли невірний логін або пароль
// інформування про помилку при среєстрації юзверя
//функція обробки відповіді, якщо 200 то ок, якщо 500 сервак упав і т.д.
//Реєстраця, ллогін це клмпоненти (можна використовувати декілька разів)
//Покалсти компоненти реестрації і логіну на на сторінкки
//попробовать сделать чтобы при наличии ошибки в ргеистрации отображать ошибку.
//У меня не получилось. Когда заполнил данные, первый раз отображает, а потом там уже есть эррор и не отображает ошибку
//проверить достіпні ли переході по прямім ссілкам если нет авторизации
//очищается ли токен после выхода юзера
//contacts item після деаутентифікації
