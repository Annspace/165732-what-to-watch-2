import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const hoverCardHandler = jest.fn();
  const MovieListComponent = renderer
    .create(<MovieList onHoverCard={hoverCardHandler} movies={mockData.movies}/>);
  expect(MovieListComponent).toMatchSnapshot();
});
