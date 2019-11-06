import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReviewPropTypes} from '../../prop-types/prop-types';

class MovieReviews
  extends PureComponent {
  render() {
    const {reviews} = this.props;
    return (
      <>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {reviews.map((review, index)=> {
              return (
                <div className="review" key={index}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime="2015-11-18">{review.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })}
          </div>
          <div className="movie-card__reviews-col">
          </div>
        </div>
      </>
    );
  }
}
MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default MovieReviews;
