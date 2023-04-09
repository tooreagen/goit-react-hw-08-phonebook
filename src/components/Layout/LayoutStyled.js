import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const NavigationLink = styled(NavLink)`
  padding: 5px 10px;
  font-weight: 700;
  background-color: lightgray;
  border-radius: 5px;

  &.active {
    background-color: lightcoral;
  }
`;
