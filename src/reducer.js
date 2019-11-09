import mockData from './mocks/films';
export const SET_GENRE_FILTER = `SET_GENRE_FILTER`;
export const SET_MOVIES_BY_GENRE = `SET_MOVIES_BY_GENRE`;
export const SET_GENRES_LIST = `SET_GENRES_LIST`;

export const initialState = {
  movies: mockData.movies,
  filteredMovies: [],
  currentGenre: `All genres`,
  genres: [`All genres`],
};

export const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: SET_GENRE_FILTER,
    payload: genre
  }),
  setFilteredMovies: (filteredMovies) => ({
    type: SET_MOVIES_BY_GENRE,
    payload: filteredMovies,
  }),
  setGenresList: (uniqueGenres) => ({
    type: SET_GENRES_LIST,
    payload: uniqueGenres,
  }),
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return Object.assign({}, state, {
        currentGenre: action.payload,
      });
    case SET_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        filteredMovies: action.payload,
      });
    case SET_GENRES_LIST:
      return Object.assign({}, state, {
        genres: action.payload,
      });
    default:
      return state;
  }
};
