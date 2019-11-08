import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';
import mockData from '../../mocks/films.js';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
  genre: `All genres`,
  filteredMovies: mockData.movies,
});

it(`renders correctly`, () => {
  const clickGenreHandler = jest.fn();
  const setGenreHandler = jest.fn();
  const GenreListComponent = renderer
    .create(
        <Provider store={store}>
          <GenreList setGenre={setGenreHandler} genreToShow={`drama`} onclickGenre={clickGenreHandler} movies={mockData.movies}/>
        </Provider>);
  expect(GenreListComponent).toMatchSnapshot();
});
