import PropTypes from 'prop-types';
import { Card, Text, ActorImage } from './ActorCard.styled';
import placeholder from 'images/ProfilePlaceholder.jpg';

export const ActorCard = ({ name, character, photo }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

  let imgSource = placeholder;

  if (photo !== null) {
    imgSource = `${BASE_IMG_URL}${photo}`;
  }

  return (
    <Card>
      <ActorImage src={imgSource} alt={`Actor ${name}`} />
      <Text>
        <span>
          <b>Name: </b>
          {name}
        </span>
      </Text>
      <Text>
        <span>
          <b>Character: </b>
          {character}
        </span>
      </Text>
    </Card>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  photo: PropTypes.string,
};
