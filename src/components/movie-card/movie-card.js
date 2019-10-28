import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class MovieCard extends PureComponent {
  navigateToDetailsPage = (id) => {
    location.href = `/films-${id}`;
  };
  render() {
    const {id, title, onHoverCard, posterImage} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseOver={() => onHoverCard(id)}>
        <div className="small-movie-card__image" onClick={() => this.navigateToDetailsPage(id)}>
          <img src={posterImage} alt="Midnight Special" width="280" height="175"/>
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
  posterImage: PropTypes.string.isRequired
};

export default MovieCard;
