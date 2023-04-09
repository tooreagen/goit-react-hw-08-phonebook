import { nanoid } from 'nanoid';
import { LoginForm } from './styles/AuthLoginStyled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';

const AuthLogin = () => {
  const inputEmailID = nanoid();
  const inputPassID = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    const { email, password } = evt.target;
    evt.preventDefault();
    dispatch(
      loginUser({
        email: email.value,
        password: password.value,
      })
    );
  };
  
  return (
    <LoginForm onSubmit={handleSubmit}>
      <label htmlFor={inputEmailID}>Email:</label>
      <input type="email" name="email" id={inputEmailID} />

      <label htmlFor={inputPassID}>Password:</label>
      <input type="password" name="password" id={inputPassID} />

      <button type="submit">Login</button>
    </LoginForm>
  );
};

export default AuthLogin;