import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const mapStateToProps = state => {
  return {
    token: state.facebook.auth.token,
    profile: state.facebook.profile
  }
}

class SidebarConnected extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {
        name: 'my friend'
      }
    }
  }

  async componentDidMount() {
    const resp = await axios.get('https://social-webapi.azurewebsites.net/api/users/me', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
    this.setState({profile: resp.data})
  }

  render() {
    return (
      <div>
        <h3>side</h3>
        <h4>Hello, {this.state.profile.name}!</h4>
      </div>
    )
  }
}

const Sidebar = connect(mapStateToProps)(SidebarConnected)

export default Sidebar
