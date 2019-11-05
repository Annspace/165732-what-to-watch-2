import PropTypes from 'prop-types';

export let ReviewPropTypes = PropTypes.shape({
  text: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  author: PropTypes.string,
});

let LikeThisTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  posterImage: PropTypes.string.isRequired,
  genre: PropTypes.string,
  src: PropTypes.string.isRequired,
  runTime: PropTypes.string,
  released: PropTypes.number,
  director: PropTypes.string,
  starrings: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
});

export let MoviePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  posterImage: PropTypes.string,
  genre: PropTypes.string,
  src: PropTypes.src,
  runTime: PropTypes.string,
  released: PropTypes.number,
  director: PropTypes.string,
  starrings: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  likeThis: PropTypes.arrayOf(LikeThisTypes),
  reviews: PropTypes.arrayOf(ReviewPropTypes),
});
