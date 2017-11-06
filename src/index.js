//dependencies
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird'
import { Provider } from 'react-redux'

// Routers
import AppRouters from './routers';

// assets
import './index.css';

// Redux Store
import configureStore from './lib/configureStore'

// Reducers
import rootReducer from './reducers'

// bluebird config
window.Promise = Bluebird
Bluebird.config({warning: false})
window.addEventListener('unhandledrejection', error => {
  error.preventDefault()
  if(process.env.NODE_ENV !== 'production'){
    console.warn('Unhandled Promise rejection warning.', error.detail)
  }
})

// configure redux Store
const store = configureStore({
  initialState: window.initialState
}, rootReducer)

render(
  <Provider store={store}>
    <Router>
      <AppRouters />
    </Router>
  </Provider>,
  document.getElementById('root')
);
