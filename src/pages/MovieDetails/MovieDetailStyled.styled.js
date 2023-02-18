import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const BackButton = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  color: #fff;
  background-color: #20c997;
  border-radius: 5px;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  object-position: top;
`;

export const Title = styled.h1`
  display: flex;
  margin-top: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
`;

export const AdditionalMovieInfo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

export const NavLinkItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
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
`;

export const MovieInfoLink = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
