import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {MoviePropTypes} from '../../prop-types/prop-types';
import withActiveItem from '../../hocs/with-active-item';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.hoverCardHandler = this.hoverCardHandler.bind(this);
    this.leaveCardHandler = this.leaveCardHandler.bind(this);
  }
  hoverCardHandler(id) {
    const {onActiveChange} = this.props;
    this.timer = setTimeout(() => {
      onActiveChange(id);
    }, 1000);
  }
  leaveCardHandler() {
    const {onActiveChange} = this.props;
    onActiveChange(-1);
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  render() {
    const {movies, activeItem} = this.props;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return <MovieCard
              movie={movie}
              key={movie.id}
              onHoverCard={this.hoverCardHandler}
              onLeaveCard={this.leaveCardHandler}
              isPlaying={activeItem === movie.id}
            />;
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onActiveChange: PropTypes.func.isRequired,
  activeItem: PropTypes.number.isRequired,
};

export default withActiveItem(MovieList);
