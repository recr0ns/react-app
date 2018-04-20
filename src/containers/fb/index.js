import React, { Component } from 'react'
import { Switch, Route, Link, NavLink } from 'react-router-dom'

import Identity from './identity'
import Content from './content'

export default class Facebook extends Component {
  render() {
    return (
      <div>
        <h1>Facebook</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/identity'>SignIn</NavLink></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/identity" component={Identity}/>
            <Route path="/feed" component={Content}/>
          </Switch>
        </main>
      </div>
    )
  }
}

const Main = () => {
  return (
    <h1>Main page!</h1>
  )
}