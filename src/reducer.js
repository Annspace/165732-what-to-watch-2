import {SET_GENRE_FILTER, GET_MOVIES_BY_GENRE} from './actions/index';
import mockData from "./mocks/films";
export const initialState = {
  genre: `All genres`,
  filteredMovies: mockData.movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return Object.assign({}, state, {
        genre: action.genre,
      });
    case GET_MOVIES_BY_GENRE:
      return Object.assign({}, state, {
        filteredMovies: action.filteredMovies,
      });
    default:
      return state;
  }
};

export default reducer;
