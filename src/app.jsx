import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Welcome from './containers/welcome/index'
import Main from './containers/main'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
 
fontawesome.library.add(regular)

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Account" component={Main}/>
        <Route path="/Security" component={Welcome}/>
      </Switch>
    );
  }
}

export default App
