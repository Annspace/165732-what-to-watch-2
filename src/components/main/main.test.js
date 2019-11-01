import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
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
  const mainComponent = renderer
    .create(<Main onHoverCard={hoverCardHandler} movies={mockData.movies}/>, options).toJSON();
  expect(mainComponent).toMatchSnapshot();
});
