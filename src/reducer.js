export const SET_GENRE_FILTER = `SET_GENRE_FILTER`;
export const SET_UPDATED_MOVIES_BY_GENRE = `SET_UPDATED_MOVIES_BY_GENRE`;
const ALL_GENRES = `All genres`;

export const initialState = {
  movies: [],
  filteredMovies: [],
  currentGenre: ALL_GENRES,
  genres: [],
};

export const ActionCreator = {
  setGenreFilter: (genre) => ({
    type: SET_GENRE_FILTER,
    payload: genre
  }),
  setUpdatedMovies: (movies) => ({
    type: SET_UPDATED_MOVIES_BY_GENRE,
    payload: movies,
  }),
};

const getUniqueGenres = (movies) => {
  const genresArray = movies.map((movie) => movie.genre);
  genresArray.unshift(`All genres`);
  return genresArray.filter((movie, index) => genresArray.indexOf(movie) === index);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return Object.assign({}, state, {
        currentGenre: action.payload,
        filteredMovies: action.payload === ALL_GENRES ? state.movies : state.movies.filter((movie) => movie.genre === action.payload),
      });
    case SET_UPDATED_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        movies: action.payload,
        filteredMovies: state.currentGenre === ALL_GENRES ? action.payload : action.payload.filter((movie) => movie.genre === state.currentGenre),
        genres: getUniqueGenres(action.payload),
      });
    default:
      return state;
  }
};
