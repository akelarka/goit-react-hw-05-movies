import { Outlet } from 'react-router-dom';
import { Main, Header, NavLinkItem, Navigation } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/movies">Movies</NavLinkItem>
        </Navigation>
      </Header>
      <Main>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
