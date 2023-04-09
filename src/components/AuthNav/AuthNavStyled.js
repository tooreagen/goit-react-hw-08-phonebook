import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  padding: 5px 10px;
  font-weight: 700;
  background-color: lightgray;
  border-radius: 5px;

  &.active {
    background-color: lightcoral;
  }
`;
