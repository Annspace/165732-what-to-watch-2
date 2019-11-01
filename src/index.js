import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockData from './mocks/films.js';

const init = () => {
  ReactDOM.render(<App movies={mockData.movies} onHoverCard={() => {}}/>,
      document.getElementById(`root`));
};
init();
