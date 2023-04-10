import { nanoid } from 'nanoid';
import { FormRegister } from './RegisterFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from 'redux/auth/auth-operations';
import { selectError } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';

const RegisterForm = () => {
  const inputNameID = nanoid();
  const inputEmailID = nanoid();
  const inputPassID = nanoid();
  const inputPassRetypeID = nanoid();

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

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <FormRegister onSubmit={handleSubmit}>
      <label htmlFor={inputNameID}>User name:</label>
      <input type="text" name="name" id={inputNameID} />

      <label htmlFor={inputEmailID}>E-mail:</label>
      <input type="email" name="email" id={inputEmailID} />

      <label htmlFor={inputPassID}>Password:</label>
      <input type="password" name="password" id={inputPassID} />

      <label htmlFor={inputPassRetypeID}>Retype password:</label>
      <input type="password" name="passRetype" id={inputPassRetypeID} />

      <button type="submit">Зарегистрироваться</button>
    </FormRegister>
  );
};

export default RegisterForm;
