import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';
import mockData from '../../mocks/films.js';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {
      createRef() {}
    };
  }
  return null;
}

it(`renders correctly`, () => {
  const options = {createNodeMock};
  const hoverCardHandler = jest.fn();
  const MovieListComponent = renderer
    .create(<MovieList onHoverCard={hoverCardHandler} movies={mockData.movies}/>, options).toJSON();
  expect(MovieListComponent).toMatchSnapshot();
});
