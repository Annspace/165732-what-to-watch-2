import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      hoveredCard: -1,
      playingCard: -1,
    };
  }
  hoverCardHandler = (id) => {
    const {onHoverCard} = this.props;
    onHoverCard();
    this.setState((prevState) => {
      return {
        ...prevState,
        hoveredCard: id,
      };
    });
    this.timer = setTimeout(() => {
      if (this.state.hoveredCard === id) {
        this.setState({
          playingCard: id,
        });
      } else {
        this.setState({
          playingCard: -1,
        });
      }
    }, 1000);
  };
  leaveCardHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        hoveredCard: -1,
        playingCard: -1,
      };
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
              isPlaying={this.state.playingCard === movie.id}
            />;
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
