import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
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
  const clickTitleHandler = jest.fn();
  const AppComponent = renderer
    .create(<App onHoverCard={clickTitleHandler} movies={mockData.movies}/>, options);
  expect(AppComponent).toMatchSnapshot();
});
