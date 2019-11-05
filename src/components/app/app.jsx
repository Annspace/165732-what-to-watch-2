import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';

const getPageScreen = (props) => {
  const {movies, onHoverCard} = props;
  switch (location.pathname) {
    case `/`:
      return <Main movies={movies} onHoverCard={onHoverCard}/>;
    case `/films-${location.pathname.split(`-`).splice(-1)}`:
      return <MovieInfo
        movie={movies.filter((movie) => movie.id === +location.pathname.split(`-`).splice(-1))[0]}
      />;
    default:
      return null;
  }
};

const App = (props) => {
  return <>{getPageScreen(props)}</>;
};

getPageScreen.propTypes = {
  id: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  onHoverCard: PropTypes.func.isRequired,
};

export default App;
