import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../videoplayer/videoplayer.jsx';
import {MoviePropTypes} from '../../prop-types/prop-types';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
  }
  navigateToDetailsPage(id) {
    location.href = `/films-${id}`;
  }
  render() {
    const {movie, onLeaveCard, onHoverCard, isPlaying} = this.props;
    const {id, src, posterImage, title} = movie;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => onHoverCard(id)}
        onMouseLeave={onLeaveCard}>
        <div className="small-movie-card__image" onClick={() => this.navigateToDetailsPage(id)}>
          <VideoPlayer isMuted isPlaying={isPlaying} poster={posterImage} src={src}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={`/films-${id}`}>{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: MoviePropTypes.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
