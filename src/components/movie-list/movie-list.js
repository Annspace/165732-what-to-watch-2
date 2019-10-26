import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1,
    };
  }
  hoverCardHandler = (id) => {
    const {onHoverCard} = this.props;
    onHoverCard();
    this.setState((prevState) => {
      return {
        ...prevState,
        activeCard: id,
      };
    });
  };
  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => {
            return <MovieCard key={movie.id} id={movie.id} title={movie.title}
              posterImage={movie.posterImage}
              onHoverCard={this.hoverCardHandler}/>;
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onHoverCard: PropTypes.func,
};

export default MovieList;
