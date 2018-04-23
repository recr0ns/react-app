import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = state => {
  return {
    profile: state.facebook.profile
  }
}

class SidebarConnected extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>side</h3>
        <h4>Hello, {this.props.profile.name}!</h4>
      </div>
    )
  }
}

const Sidebar = connect(mapStateToProps)(SidebarConnected)

export default Sidebar
