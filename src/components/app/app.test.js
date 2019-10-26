import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import mockData from '../../mocks/films';

it(`renders correctly`, () => {
  const clickTitleHandler = jest.fn();
  const AppComponent = renderer
    .create(<App onHoverCard={clickTitleHandler} movies={mockData.movies}/>);
  expect(AppComponent).toMatchSnapshot();
});
