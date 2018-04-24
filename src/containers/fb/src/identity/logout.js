import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { logOut } from '../../actions'

class LogOut extends Component {
  componentDidMount() {
    console.log('log out component')
    console.log(this.props)
    this.props.logOut(this.props.history)
  }

  render() {
    return null
  }
}

export default connect(null, { logOut })(LogOut)