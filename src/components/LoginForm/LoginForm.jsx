import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';
import { FormLogin } from './LoginFormStyled';
import { selectError } from 'redux/auth/auth-selectors';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const inputEmailID = nanoid();
  const inputPassID = nanoid();
  const dispatch = useDispatch();
  const error = useSelector(selectError);

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

  if (error) {
    toast.error('Incorrect login or password');
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <label htmlFor={inputEmailID}>Email:</label>
      <input type="email" name="email" id={inputEmailID} />

      <label htmlFor={inputPassID}>Password:</label>
      <input type="password" name="password" id={inputPassID} />

      <button type="submit">Login</button>
    </FormLogin>
  );
};

export default LoginForm;
