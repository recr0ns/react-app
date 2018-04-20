import React, { Component } from 'react'
import axios from 'axios'

export default class Sidebar extends Component {
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
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjM0IiwiZXhwIjoxNTI0MzIyNjg5fQ.iEV3SK8xxgqTnya47rxyxXmO9O6AQh8uP7unmcyXy7A`
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
