import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockData from './mocks/films';

const init = () => {
  ReactDOM.render(<App movies={mockData.movies} onHoverCard={() => {}}/>,
      document.getElementById(`root`));
};
init();
