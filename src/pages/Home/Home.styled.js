import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import filmTape from '../../images/film-tape.png';

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-size: 20px;
`;

export const Item = styled.li`
  padding: 5px 12px;
  border-bottom: 1px solid transparent;
  position: relative;

  &::before {
    content: '';
    background-image: url(${filmTape});
    background-size: cover;
    position: absolute;
    width: 25px;
    height: 25px;
    left: -25px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const NavLinkItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: currentColor;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
