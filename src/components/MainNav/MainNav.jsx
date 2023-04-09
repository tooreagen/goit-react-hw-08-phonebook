import { NavigationLink } from "./MainNavStyled";

const MainNav = () => {
  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/contacts">Contacts</NavigationLink>
    </nav>
  );
};

export default MainNav;
