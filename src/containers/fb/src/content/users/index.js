import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { fetchAllUsers } from '../../../actions'

import UsersList from '../../components/users_list'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    return (
      <UsersList users={this.props.users.filter(u => u.id != this.props.id)} />
    )
  }
}

const mapStateToProps = state => {
  return {
    id: state.facebook.profile.id,
    users: state.facebook.users
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchAllUsers
})(UserList))