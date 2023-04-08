const AuthLogin = () => {
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
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthLogin;