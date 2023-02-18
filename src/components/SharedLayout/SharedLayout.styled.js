import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

const NavLinkItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  color: currentColor;
  border-radius: 5px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: #fff;
    background-color: #20c997;
    font-weight: 500;

    text-decoration: none;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  margin: 0px auto;
  padding: 0px 15px;
  max-width: 1170px;
`;

const Main = styled.main`
  margin: 20px;
`;

export { Main, Header, NavLinkItem, Navigation };
