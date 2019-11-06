import React from 'react';
import renderer from 'react-test-renderer';
import MovieOverview from './movie-overview.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const MovieOverviewComponent = renderer
    .create(<MovieOverview movie={mockData.movies[0]}/>);
  expect(MovieOverviewComponent).toMatchSnapshot();
});
