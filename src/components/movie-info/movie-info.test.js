import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './movie-info.jsx';
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
  const MovieInfoComponent = renderer
    .create(<MovieInfo movie={mockData.movies[0]}/>, options);
  expect(MovieInfoComponent).toMatchSnapshot();
});
