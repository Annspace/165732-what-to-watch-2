import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../videoplayer/videoplayer.jsx';

class MovieCard extends PureComponent {
  navigateToDetailsPage = (id) => {
    location.href = `/films-${id}`;
  };
  render() {
    const {id, title, posterImage, src, isPlaying, onLeaveCard, onHoverCard} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => onHoverCard(id)}
        onMouseLeave={onLeaveCard}>
        <div className="small-movie-card__image" onClick={() => this.navigateToDetailsPage(id)}>
          <VideoPlayer isMuted={true} isPlaying={isPlaying} poster={posterImage} src={src}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={`/films-${id}`}>{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
  posterImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;
