import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './index.scss';

import reducers from './reducers'

import CV from './containers/fb'

import registerServiceWorker from './registerServiceWorker'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CV/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
