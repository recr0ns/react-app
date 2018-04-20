import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Sidebar from './sidebar'
import Feed from './feed'

export default class Content extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div>
          <Switch>
            <Route path='/feed' component={Feed}/>
          </Switch>
        </div>
      </div>
    )
  }
}
