import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {MoviePropTypes} from '../../prop-types/prop-types';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      activeCard: -1,
    };
  }
  hoverCardHandler = (id) => {
    this.timer = setTimeout(() => {
      this.setState({activeCard: id});
    }, 1000);
  };
  leaveCardHandler = () => {
    this.setState({
      activeCard: -1,
    }, () => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    });
  };
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return <MovieCard
              movie = {movie}
              key={movie.id}
              onHoverCard={this.hoverCardHandler}
              onLeaveCard={this.leaveCardHandler}
              isPlaying={this.state.activeCard === movie.id}
            />;
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};

export default MovieList;
