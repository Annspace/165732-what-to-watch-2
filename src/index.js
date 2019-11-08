import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import mockData from './mocks/films.js';

const init = () => {
  const store = createStore(reducer);
  ReactDOM.render(
      <Provider store={store}>
        <App movies={mockData.movies} onHoverCard={() => {}}/>
      </Provider>,
      document.getElementById(`root`));
};
init();
