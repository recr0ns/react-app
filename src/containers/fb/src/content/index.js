import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import Feed from './feed'

const mapStateToProps = state => {
  return {
    isAuthorized: state.facebook.auth.isAuthorized
  }
}

class ConnectedContent extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div>
          <Switch>
            <Route path='/feed' render={() => this.props.isAuthorized? (<Feed/>) : (<Redirect to='/identity/signin'/>)}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const Content = connect(mapStateToProps)(ConnectedContent)

export default Content
