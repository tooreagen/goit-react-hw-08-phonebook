import { FormRegister } from './RegisterFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from 'redux/auth/auth-operations';
import { selectError } from 'redux/auth/auth-selectors';
import { Button, TextField } from '@mui/material';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = evt => {
    const { name, email, password, passRetype } = evt.target;
    evt.preventDefault();
    if (password.value !== passRetype.value) {
      toast.error(`Passwords don't match`);
      return;
    }
    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    evt.target.reset();
  };

  if (error) {
    toast.error('Register error');
  }

  return (
    <FormRegister onSubmit={handleSubmit}>
      <TextField
        name="name"
        type="text"
        label="User name"
        color="primary"
        size="small"
        focused
      />
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
      <TextField
        name="passRetype"
        type="password"
        label="Retype password"
        color="primary"
        size="small"
        focused
      />

      <Button type="submit" variant="contained">
        Register
      </Button>
    </FormRegister>
  );
};

export default RegisterForm;
