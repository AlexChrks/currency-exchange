import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {reducer} from './store/reducers/reducers.js';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
