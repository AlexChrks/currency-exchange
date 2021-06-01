import React from 'react';
import Exchanger from '../Exchanger/Exchanger'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {reducer} from '../../store/reducers/reducers.js';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
        //это лучше вынести в индекс файл что бы все обертки были в одном месте
      <Exchanger />
    </Provider>
  );
}

export default App;
