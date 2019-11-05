import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      activeCard: -1,
    };
  }
  hoverCardHandler = (id) => {
    const {onHoverCard} = this.props;
    onHoverCard();
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
            return <MovieCard key={movie.id} id={movie.id} title={movie.title} src={movie.src}
              posterImage={movie.posterImage}
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
  movies: PropTypes.array.isRequired,
  onHoverCard: PropTypes.func.isRequired,
};

export default MovieList;
