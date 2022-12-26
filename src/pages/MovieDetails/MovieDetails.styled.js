import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FlexContainer = styled('div')`
  display: flex;
  margin: 0 20px;
  height: 330px;
`;

export const StyledImg = styled('img')`
  margin-right: 30px;
  height: 100%;
`;

export const SytledButton = styled(NavLink)`
  display: block;
  margin-bottom: 5px;
`;

export const StyledList = styled('ul')`
  display: block;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
`;
