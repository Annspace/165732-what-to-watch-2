import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

class App extends PureComponent {
  render() {
    const {movies, onHoverCard} = this.props;
    return (<Main movies={movies} onHoverCard={onHoverCard}/>);
  }
}
App.propTypes = {
  movies: PropTypes.array.isRequired,
  onHoverCard: PropTypes.func.isRequired,
};

export default App;
