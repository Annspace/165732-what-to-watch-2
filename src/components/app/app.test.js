import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import mockData from '../../mocks/films.js';

it(`renders correctly`, () => {
  const clickTitleHandler = jest.fn();
  const AppComponent = renderer
    .create(<App onHoverCard={clickTitleHandler} movies={mockData.movies}/>);
  expect(AppComponent).toMatchSnapshot();
});
