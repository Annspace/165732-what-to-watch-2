export const SET_GENRE_FILTER = `SET_GENRE_FILTER`;
export const GET_MOVIES_BY_GENRE = `GET_MOVIES_BY_GENRE`;
export const ALL_MOVIES = `ALL_MOVIES`;

export const setGenreFilter = (genre) => ({
  type: SET_GENRE_FILTER,
  genre,
});

export const getMoviesByGenre = (filteredMovies) => ({
  type: GET_MOVIES_BY_GENRE,
  filteredMovies,
});
