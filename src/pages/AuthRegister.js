const AuthRegister = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User name:
        <input type="text" />
      </label>
      <label>
        E-mail:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <label>
        Retype password:
        <input type="password" />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default AuthRegister;
