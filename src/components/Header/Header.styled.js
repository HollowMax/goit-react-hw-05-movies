import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled('header')`
  padding-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: orange;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;

  margin-left: 20px;

  &.active {
    color: lightseagreen;
  }

  &:hover {
    color: blue;
  }
`;
