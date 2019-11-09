import {reducer} from './reducer';
import {initialState} from './reducer';
import {SET_GENRE_FILTER, SET_MOVIES_BY_GENRE, SET_GENRES_LIST} from './reducer';
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
      filteredMovies: [],
      currentGenre: `comedy`,
      genres: [`All genres`],
    };
    expect(reducer(state, setGenre)).toEqual(Object.assign({}, state, {
      currentGenre: `drama`,
    }));
  });
  it(`Should handle SET_MOVIES_BY_GENRE`, () => {
    const state = {
      movies: mockData.movies,
      filteredMovies: [],
      currentGenre: `All genres`,
      genres: [`All genres`],
    };
    const setGenreFilterAction = {
      type: SET_MOVIES_BY_GENRE,
      payload: mockData.movies.filter((movie) => movie.genre === `drama`),
    };
    expect(reducer(state, setGenreFilterAction)).toEqual(Object.assign({}, state, {
      filteredMovies: setGenreFilterAction.payload,
    }));
  });
  it(`Should handle SET_GENRES_LIST`, () => {
    const state = {
      movies: mockData.movies,
      filteredMovies: [],
      currentGenre: `All genres`,
      genres: [`All genres`],
    };
    const setGenres = {
      type: SET_GENRES_LIST,
      payload: [`All genres`, `drama`],
    };
    expect(reducer(state, setGenres)).toEqual(Object.assign({}, state, {
      genres: [`All genres`, `drama`],
    }));
  });
});
