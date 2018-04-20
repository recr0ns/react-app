import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import rootReducer from './containers/fb/reducers'
import './index.scss'

import CV from './containers/fb'

import registerServiceWorker from './registerServiceWorker'

const reducer = combineReducers({
  facebook: rootReducer,
  routing: routerReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CV/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
