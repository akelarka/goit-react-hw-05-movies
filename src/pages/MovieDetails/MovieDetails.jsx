import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieByID } from 'utils/FilmsAPI';
import { Loader } from '../../components/Loader/Loader';
import { getGenres } from '../../utils/getGenres';
import {
  Wrapper,
  BackButton,
  Poster,
  Title,
  NavLinkItem,
  AdditionalMovieInfo,
  MovieInfo,
  MovieTextInfo,
  MovieInfoLink,
} from './MovieDetailStyled.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300/';

  useEffect(() => {
    getMovieByID(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return;
  }
  const { title, vote_average, poster_path, overview, genres } = movie;
  const genresString = getGenres(genres);
  return (
    <Wrapper>
      <BackButton to={location.state ?? '/'}>Back</BackButton>
      <MovieInfo>
        <Poster src={`${BASE_IMG_URL}${poster_path}`} alt={title} />
        <MovieTextInfo>
          <Title>{title}</Title>
          <h2>User score:</h2>
          <p>{Number(vote_average).toFixed(2)} / 10</p>
          <h2>Owerview:</h2>
          <p> {overview}</p>
          <h2>Genres</h2>
          <p>{genresString}</p>
        </MovieTextInfo>
      </MovieInfo>
      <AdditionalMovieInfo>
        <h3>Additional information:</h3>
        <MovieInfoLink>
          <NavLinkItem to="cast">Cast</NavLinkItem>
          <NavLinkItem to="reviews">Reviews</NavLinkItem>
        </MovieInfoLink>
      </AdditionalMovieInfo>
      <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default MovieDetails;
