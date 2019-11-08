import reducer from './reducer';
import {initialState} from './reducer';
import {SET_GENRE_FILTER, GET_MOVIES_BY_GENRE} from './actions';
import mockData from './mocks/films';

describe(`reducer`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`Should handle SET_GENRE_FILTER`, () => {
    const setGenreFilterAction = {
      type: SET_GENRE_FILTER,
      genre: `drama`,
    };
    expect(reducer(undefined, setGenreFilterAction)).toEqual({genre: `drama`, filteredMovies: mockData.movies});
  });
  it(`Should handle GET_MOVIES_BY_GENRE`, () => {
    const setGenreFilterAction = {
      type: GET_MOVIES_BY_GENRE,
      filteredMovies: mockData.movies.filter((movie) => movie.genre === `drama`),
    };
    expect(reducer(undefined, setGenreFilterAction)).toEqual({genre: `All genres`, filteredMovies: setGenreFilterAction.filteredMovies});
  });
});
