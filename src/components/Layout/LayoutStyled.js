import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #b1b1b1;
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
