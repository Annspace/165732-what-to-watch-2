import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './app.jsx';
import mockData from '../../mocks/films.js';

const mockStore = configureMockStore();
const store = mockStore({
  genre: `All genres`,
  filteredMovies: mockData.movies,
});

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
    .create(
        <Provider store={store}> <App onHoverCard={clickTitleHandler} movies={mockData.movies}/> </Provider>, options);
  expect(AppComponent).toMatchSnapshot();
});
