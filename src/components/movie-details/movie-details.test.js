import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const MovieDetailsComponent = renderer
    .create(<MovieDetails movie={mockData.movies[0]}/>);
  expect(MovieDetailsComponent).toMatchSnapshot();
});
