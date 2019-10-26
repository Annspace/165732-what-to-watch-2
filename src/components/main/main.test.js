import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import mockData from '../../mocks/films';

it(`renders correctly`, () => {
  const hoverCardHandler = jest.fn();
  const mainComponent = renderer
    .create(<Main onHoverCard={hoverCardHandler} movies={mockData.movies}/>);
  expect(mainComponent).toMatchSnapshot();
});