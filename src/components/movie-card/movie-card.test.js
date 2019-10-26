import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import mockData from '../../mocks/films';

it(`renders correctly`, () => {
  const hoverCardHandler = jest.fn();
  const MovieCardComponent = renderer
    .create(<MovieCard
      id={mockData.movies[0].id}
      posterImage={mockData.movies[0].posterImage}
      title={mockData.movies[0].title}
      onHoverCard={hoverCardHandler}/>);
  expect(MovieCardComponent).toMatchSnapshot();
});
