import React, { Component } from 'react'
import { Switch, Route, NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { init } from './actions'

import Identity from './src/identity'
import Content from './src/content'

const mapStateToProps = state => { return {
    auth: state.facebook.auth.isAuthorized
  }
}

class Facebook extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <h1>Facebook</h1>
        { this.props.auth ? AuthNavigation() : UnauthorizedNavigation() }
        <main>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/identity" component={Identity}/>
            <Route path="/feed" component={Content}/>
            <Route path="/users" component={Content}/>
            <Route component={Page404} />
          </Switch>
        </main>
      </div>
    )
  }
}

const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/feed'>Feed</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/identity/logout'>Log Out</NavLink></li>
      </ul>
    </nav>
  )
}

const UnauthorizedNavigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/feed'>SignIn</NavLink></li>
      </ul>
    </nav>
  )
}

const Main = () => {
  return (
    <h1>Main page!</h1>
  )
}

const Page404 = () => {
  return (
    <div>
      <h1>Oops, page is not found!</h1>
      <Link to='/'>Go to main</Link>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, {
  init
})(Facebook))