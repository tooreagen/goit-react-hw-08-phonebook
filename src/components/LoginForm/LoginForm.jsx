import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';
import { FormLogin } from './LoginFormStyled';
import { selectError } from 'redux/auth/auth-selectors';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';

const LoginForm = () => {
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
      <TextField
        name="email"
        type="email"
        label="E-mail"
        color="primary"
        size="small"
        focused
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        color="primary"
        size="small"
        focused
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </FormLogin>
  );
};

export default LoginForm;
