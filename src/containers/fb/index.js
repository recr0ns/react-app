import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Identity from './src/identity'
import Content from './src/content'

const mapStateToProps = state => { return {
    auth: state.facebook.auth.isAuthorized
  }
}

class FacebookConnected extends Component {
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

const Facebook = connect(mapStateToProps)(FacebookConnected)

export default FacebookConnected