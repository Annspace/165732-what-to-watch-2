import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MoviePropTypes} from '../../prop-types/prop-types';
import {setGenreFilter} from '../../actions';
import {connect} from 'react-redux';

class GenreList extends PureComponent {
  constructor(props) {
    super(props);
    this.getUniqueGenres = this.getUniqueGenres.bind(this);
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
  }

  clickGenreHandler(genreName) {
    const {onclickGenre, setGenre} = this.props;
    setGenre(genreName).then(onclickGenre(genreName));
  }

  getUniqueGenres() {
    const {movies} = this.props;
    const genresArray = movies.map((movie) => movie.genre);
    return genresArray.filter((movie, index) => genresArray.indexOf(movie) === index);
  }

  render() {
    const {genreToShow} = this.props;
    const genres = this.getUniqueGenres();
    genres.unshift(`All genres`);
    return (
      <ul className="catalog__genres-list">
        {genres.map((genreItem, index) => {
          return <li key={index} onClick={() => this.clickGenreHandler(genreItem)} className={`catalog__genres-item
           ${genreToShow === genreItem ? `catalog__genres-item--active` : ``}`}>
            <a className="catalog__genres-link">{genreItem}</a>
          </li>;
        })}
      </ul>
    );
  }
}

GenreList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onclickGenre: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  genreToShow: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  genreToShow: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  setGenre: (genre) => dispatch(setGenreFilter(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
