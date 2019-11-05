import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
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
  const leaveCardHandler = jest.fn();
  const MovieCardComponent = renderer
    .create(<MovieCard
      movie={mockData.movies[0]}
      onHoverCard={hoverCardHandler}
      isPlaying={false}
      onLeaveCard={leaveCardHandler}/>, options).toJSON();
  expect(MovieCardComponent).toMatchSnapshot();
});
