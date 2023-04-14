import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Layout from './Layout/Layout';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import NotLoggedIn from './NotLoggedIn/NotLoggedIn';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/auth-operations';

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              isLoggedIn ? (
                <ContactsPage />
              ) : (
                <>
                  <NotLoggedIn /> <LoginPage />
                </>
              )
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
