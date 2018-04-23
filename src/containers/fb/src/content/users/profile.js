import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, NavLink, Link, withRouter } from 'react-router-dom'

import api from '../../../api'

class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.id = this.props.match.params.id;
    this.state = {
      loading: true,
      user: {}
    }
  }

  async fetchProfile(id) {
    this.setState({ loading: true });
    const user = await api.fetchProfile(id)
    this.setState({ loading: false, user });
  }
  
  async componentDidMount() {
    await this.fetchProfile(this.id)
  }

  async componentWillReceiveProps(props) {
    if (props.match.params.id !== this.id) {
      this.id = props.match.params.id
      await this.fetchProfile(this.id)
    }
  }

  renderProfile({ name, imageUrl, info, birthday }) {
    return (
      <div>
        {imageUrl && <img height="200" width="200" src={imageUrl} alt="avatar"/>}
        <h2>{name}</h2>
        <h3>{birthday}</h3>
        {info && <h3>{info}</h3>}
        <ul>
          <li><NavLink to={`/users/${this.id}/wall`}>Wall</NavLink></li>
          <li><NavLink to={`/users/${this.id}/feed`}>Feed</NavLink></li>
          <li><NavLink to={`/users/${this.id}/followers`}>Followers: <span>{this.state.user.followers.length}</span></NavLink></li>
          <li><NavLink to={`/users/${this.id}/followings`}>Followings: <span>{this.state.user.followings.length}</span></NavLink></li>
        </ul>
      </div>
    )
  }

  renderWall(posts) {
    return (
      <ul>
        {posts.map(p => 
          <li key={p.id}>
            <div>
              {p.imageUrl && <img height="300" width="300" src={p.imageUrl}/>}
              <p>{p.text}</p>
              <span>{p.dateTime}</span>
            </div>
          </li>)}
      </ul>
    )
  }

  renderFeed(posts) {
    return (
      <ul>
        {posts.map(p => 
          <li key={p.id}>
            <div>
              {p.imageUrl && <img height="300" width="300" src={p.imageUrl}/>}
              <p>{p.text}</p>
              <span>By {p.user.name} at {p.dateTime}</span>
            </div>
          </li>)}
      </ul>
    )
  }

  renderUsers(users) {
    return (
      <ul>
        {users.map(u => <UserCard key={u.id} {...u}/>)}
      </ul>
    )
  }

  render() {
    if (this.state.loading) {
      return <h2>loading ... </h2>
    }

    return (
      <div>
        {this.renderProfile(this.state.user.profile)}
        <hr/>
        <Switch>
          <Route path='/users/:id/followers' render={() => this.renderUsers(this.state.user.followers)}/>
          <Route path='/users/:id/followings' render={() => this.renderUsers(this.state.user.followings)}/>
          <Route path='/users/:id/feed' render={() => this.renderFeed(this.state.user.feed)}/>
          <Route path='/users/:id' render={() => this.renderWall(this.state.user.wall)}/>
        </Switch>
        <hr/>
        <button onClick={() => this.props.history.push('/users')}>Go back</button>
      </div>
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
    profiles: state.facebook.profiles  
  }
}

export default withRouter(connect(mapStateToProps, { })(Profile))