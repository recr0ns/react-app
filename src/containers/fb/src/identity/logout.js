import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { logOut } from '../../actions'

class LogOut extends Component {
  componentDidMount() {
    this.props.logOut(this.props.history)
  }

  render() {
    return (<Redirect to='/'/>)
  }
}

export default connect(null, { logOut })(LogOut)