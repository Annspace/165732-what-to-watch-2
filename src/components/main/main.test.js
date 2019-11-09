import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';
import mockData from '../../mocks/films.js';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

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
  const hoverCardHandler = jest.fn();
  const filter = jest.fn();
  const mainComponent = renderer
    .create(<Provider store={store}>
      <Main onHoverCard={hoverCardHandler} movies={mockData.movies} filterByGenre={filter} filteredMovies={mockData.movies} currentGenre={`All genres`}/>
    </Provider>, options).toJSON();
  expect(mainComponent).toMatchSnapshot();
});
