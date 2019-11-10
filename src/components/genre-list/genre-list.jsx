import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MoviePropTypes} from '../../prop-types/prop-types';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

class GenreList extends PureComponent {
  constructor(props) {
    super(props);
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
  }

  clickGenreHandler(genreName) {
    const {setGenre, currentGenre} = this.props;
    if (genreName !== currentGenre) {
      setGenre(genreName);
    }
  }

  render() {
    const {currentGenre, genres} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genres.map((genreItem, index) => {
          return <li key={index} onClick={() => this.clickGenreHandler(genreItem)} className={`catalog__genres-item
           ${currentGenre === genreItem ? `catalog__genres-item--active` : ``}`}>
            <a className="catalog__genres-link">{genreItem}</a>
          </li>;
        })}
      </ul>
    );
  }
}

GenreList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  setGenre: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(ActionCreator.setGenreFilter(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
