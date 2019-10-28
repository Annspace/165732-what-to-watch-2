import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const hoverCardHandler = jest.fn();
  const mainComponent = renderer
    .create(<Main onHoverCard={hoverCardHandler} movies={mockData.movies}/>);
  expect(mainComponent).toMatchSnapshot();
});
