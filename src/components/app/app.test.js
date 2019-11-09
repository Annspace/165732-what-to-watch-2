import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './app.jsx';
import mockData from '../../mocks/films.js';

const mockStore = configureMockStore();
const store = mockStore({
  movies: mockData.movies,
  filteredMovies: [],
  currentGenre: `All genres`,
  genres: [`All genres`],
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
  const AppComponent = renderer
    .create(
        <Provider store={store}> <App movies={mockData.movies}/> </Provider>, options);
  expect(AppComponent).toMatchSnapshot();
});
