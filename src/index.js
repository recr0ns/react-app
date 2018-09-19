import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './index.scss'
import 'normalize.css'

import reducers from './reducers'

import Main from './containers/main'
import Reader from './containers/reader'

import registerServiceWorker from './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faBookmark, faStickyNote, faBookReader, faPlay, faPause, faThLarge } from '@fortawesome/free-solid-svg-icons';
library.add(faBook, faBookmark, faStickyNote, faBookReader,faPlay, faPause, faThLarge);


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/auth" component={Auth}></Route>
        <Route exact path="/promo" component={Promo}></Route>
        <Route path="/reader" component={Reader}></Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

let Promo = () => <h1>Promo</h1>
let Auth = () => <h1>Promo</h1>
