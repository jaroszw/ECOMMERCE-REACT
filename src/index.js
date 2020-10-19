import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
=======
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import './index.css';
import App from './App';
>>>>>>> testing

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
<<<<<<< HEAD
      <PersistGate loading={null} persistor={persistor}>
=======
      <PersistGate persistor={persistor}>
>>>>>>> testing
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
