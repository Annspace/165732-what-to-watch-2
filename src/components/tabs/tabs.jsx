import React, {PureComponent} from 'react';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import PropTypes from 'prop-types';
import {MoviePropTypes} from '../../prop-types/prop-types';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: `Details`,
    };
  }
  tabClickHandler = (tabName) => {
    this.setState({
      activeTab: tabName,
    });
  };
  render() {
    const {activeTab} = this.state;
    const {tabs, movie} = this.props;
    return (
      <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``} `}>
                <a onClick={(e) => {
                  e.preventDefault();
                  this.tabClickHandler(tab);
                }}
                className="movie-nav__link">
                  {tab}
                </a>
              </li>
            );
          })
          }
        </ul>
      </nav>
        {activeTab === `Overview` && <MovieOverview movie={movie}/>}
        {activeTab === `Details` && <MovieDetails movie={movie}/>}
        {activeTab === `Reviews` && <MovieReviews reviews={movie.reviews}/>}
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.oneOf([`Overview`, `Details`, `Reviews`])).isRequired,
  movie: MoviePropTypes.isRequired,
};

export default Tabs;
