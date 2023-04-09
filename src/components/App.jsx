import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router';
import Home from 'pages/HomePage';
import AuthRegister from 'pages/RegisterPage';
import AuthLogin from 'pages/AuthPage';
import Layout from './Layout/Layout';
import Contacts from 'pages/ContactsPage';

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
//информування коли невірний логін або пароль
// інформування про помилку при среєстрації юзверя
//функція обробки відповіді, якщо 200 то ок, якщо 500 сервак упав і т.д.
//Реєстраця, ллогін це клмпоненти (можна використовувати декілька разів)
//Покалсти компоненти реестрації і логіну на на сторінкки
//попробовать сделать чтобы при наличии ошибки в ргеистрации отображать ошибку. 
//У меня не получилось. Когда заполнил данные, первый раз отображает, а потом там уже есть эррор и не отображает ошибку