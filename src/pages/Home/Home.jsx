import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'utils/FilmsAPI';
import { Wrapper, List, Item, NavLinkItem } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => setTrends(movies.results));
  }, []);

  return (
    <Wrapper>
      <List>
        {trends.length > 0 &&
          trends.map(({ id, title }) => {
            return (
              <Item key={id}>
                <NavLinkItem to={`/movies/${id}`} state={location}>
                  {title}
                </NavLinkItem>
              </Item>
            );
          })}
      </List>
    </Wrapper>
  );
};

export default Home;
