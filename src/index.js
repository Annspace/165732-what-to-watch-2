import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ActionCreator, reducer} from './reducer';
import mockData from './mocks/films';

const init = () => {
  const store = createStore(reducer);
  store.dispatch(ActionCreator.setUpdatedMovies(mockData.movies));
  ReactDOM.render(
      <Provider store={store}>
        <App movies={store.getState().movies}/>
      </Provider>,
      document.getElementById(`root`));
};
init();
