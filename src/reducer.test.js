import {reducer} from './reducer';
import {initialState} from './reducer';
import {SET_GENRE_FILTER, SET_UPDATED_MOVIES_BY_GENRE} from './reducer';
import mockData from './mocks/films';

describe(`reducer`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`Should handle SET_GENRE_FILTER`, () => {
    const setGenre = {
      type: SET_GENRE_FILTER,
      payload: `drama`,
    };
    const state = {
      movies: mockData.movies,
      filteredMovies: mockData.movies,
      currentGenre: `All genres`,
      genres: [`All genres`],
    };
    expect(reducer(state, setGenre)).toEqual(Object.assign({}, state, {
      currentGenre: `drama`,
      filteredMovies: state.movies.filter((movie) => movie.genre === setGenre.payload),
    }));
  });
  it(`Should handle SET_UPDATED_MOVIES_BY_GENRE`, () => {
    const state = {
      movies: mockData.movies,
      filteredMovies: mockData.movies,
      currentGenre: `All genres`,
      genres: [`All genres`],
    };
    const setUpdatedMovies = {
      type: SET_UPDATED_MOVIES_BY_GENRE,
      payload: [mockData.movies[0]],
    };
    expect(reducer(state, setUpdatedMovies)).toEqual(Object.assign({}, state, {
      movies: setUpdatedMovies.payload,
      filteredMovies: setUpdatedMovies.payload,
      genres: [`All genres`, `fantasy`],
    }));
  });
});
