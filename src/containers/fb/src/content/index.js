import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import Feed from './feed'
import UserList from './users'
import Profile from './users/profile'

const mapStateToProps = state => {
  return {
    isAuthorized: state.facebook.auth.isAuthorized
  }
}

class ConnectedContent extends Component {
  render() {
    if (!this.props.isAuthorized) {
      return (<Redirect to='/identity/signin'/>)
    }

    return (
      <div>
        <Sidebar/>
        <div>
          <Switch>
            <Route path='/feed' component={Feed}/>
            <Route exact path='/users' component={UserList}/>
            <Route path='/users/:id' component={Profile}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(ConnectedContent))
