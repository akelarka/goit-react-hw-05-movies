import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuerySearch } from 'utils/FilmsAPI';

import { Wrapper, Form, Input, Button, Label } from './Movies.styled';
import { List, Item, NavLinkItem } from '../Home/Home.styled';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('movie');
  const location = useLocation();

  useEffect(() => {
    if (movieToSearch === null) {
      return;
    }

    getMovieByQuerySearch(movieToSearch).then(e => setMovieList(e));
  }, [movieToSearch]);

  const submitHandler = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.movie;

    setSearchParams({ movie: value });

    e.currentTarget.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <Input type="text" placeholder="input movie name" name="movie" />
        <Button type="submit">
          <Label>Search</Label>
        </Button>
      </Form>
      {movieList !== null && (
        <List>
          {movieList.map(({ id, original_title }) => (
            <Item key={id}>
              <NavLinkItem to={`/movies/${id}`} state={location}>
                {original_title}{' '}
              </NavLinkItem>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Movies;
