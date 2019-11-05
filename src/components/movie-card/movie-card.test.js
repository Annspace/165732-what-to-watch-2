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
      id={mockData.movies[0].id}
      posterImage={mockData.movies[0].posterImage}
      title={mockData.movies[0].title}
      onHoverCard={hoverCardHandler}
      isPlaying={false}
      onLeaveCard={leaveCardHandler}
      src={mockData.movies[0].src}/>, options).toJSON();
  expect(MovieCardComponent).toMatchSnapshot();
});
