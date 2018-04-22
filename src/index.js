import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import rootSaga from './containers/fb/sagas'

import './index.scss'

import CV from './containers/fb'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './containers/fb/store';

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CV/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
