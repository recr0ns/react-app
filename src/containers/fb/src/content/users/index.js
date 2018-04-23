import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { fetchAllUsers } from '../../../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchAllUsers()
  }

  render() {
    return (
      <ul>
        {this.props.users.map(u => <UserCard {...u} key={u.id}/>)}
      </ul>
    )
  }
}

const UserCard = ({id, name, imageUrl}) => {
  return (
    <li><Link to={`/users/${id}`}>{`${id}: ${name}${imageUrl? ' - has image': ''}`}</Link></li>
  )
}

const mapStateToProps = state => {
  return {
    users: state.facebook.users
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchAllUsers
})(UserList))