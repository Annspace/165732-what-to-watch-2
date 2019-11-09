import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MoviePropTypes} from '../../prop-types/prop-types';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

class GenreList extends PureComponent {
  constructor(props) {
    super(props);
    this.getUniqueGenres = this.getUniqueGenres.bind(this);
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
  }

  clickGenreHandler(genreName) {
    const {setGenre, currentGenre} = this.props;
    if (genreName !== currentGenre) {
      setGenre(genreName);
    }
  }

  getUniqueGenres() {
    const {movies, setGenreList, genres} = this.props;
    const genresArray = movies.map((movie) => movie.genre);
    genresArray.unshift(`All genres`);
    const genresList = genresArray.filter((movie, index) => genresArray.indexOf(movie) === index);
    if (JSON.stringify(genresList) !== JSON.stringify(genres)) {
      setGenreList(genresList);
    }
  }

  render() {
    const {currentGenre, genres} = this.props;
    this.getUniqueGenres();
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
  setGenreList: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(ActionCreator.setGenreFilter(genre)),
  setGenreList: (genres) => dispatch(ActionCreator.setGenresList(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
