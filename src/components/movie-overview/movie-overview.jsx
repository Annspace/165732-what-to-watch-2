import React, {PureComponent} from 'react';
import {MoviePropTypes} from '../../prop-types/prop-types';

class MovieOverview
  extends PureComponent {
  render() {
    const {movie} = this.props;
    const {director, starrings, description, rating, ratingsCount} = movie;
    return (
      <>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">Very good</span>
            <span className="movie-rating__count">{ratingsCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring:
            {starrings.map((starring) => starring)}
            and other</strong></p>
        </div>
      </>
    );
  }
}
MovieOverview.propTypes = {
  movie: MoviePropTypes.isRequired,
};

export default MovieOverview;
