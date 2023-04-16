import { Description } from "./PagesStyled";

const HomePage = () => {
  return (
    <main>
      <Description>
        This application is designed to save contacts of phone numbers. It uses
        user registration and authorization. The contact book has the ability to
        add and delete contacts, as well as a filter on the list of contacts. If
        you are a registered user, <a href="/login">sign in</a> , if you are a
        new user, <a href="/register">sign up</a>.
      </Description>
    </main>
  );
};

export default HomePage;
