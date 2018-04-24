import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, NavLink, Link, withRouter } from 'react-router-dom'

import UsersList  from '../../components/users_list'
import { PostsList }  from '../../components/post'

import s from './profile.scss'

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
      <div className={s.profile}>
        <div className={s.information}>      
          <img className={s.profileImage} height="200" width="200" src={imageUrl || '/images/incognito.png'} alt="avatar"/>
          <div className={s.info}>
            <h2>{name}</h2>
            <h3>{birthday}</h3>
            {info && <h3>{info}</h3>}
          </div>
        </div>
        <ul className={s.navigation}>
          <li><ProfileLink exact to={`/users/${this.id}`}><span>Wall</span></ProfileLink></li>
          <li><ProfileLink to={`/users/${this.id}/feed`}><span>Feed</span></ProfileLink></li>
          <li><ProfileLink to={`/users/${this.id}/followers`}><p>Followers: <span>{this.state.user.followers.length}</span></p></ProfileLink></li>
          <li><ProfileLink to={`/users/${this.id}/followings`}><p>Followings: <span>{this.state.user.followings.length}</span></p></ProfileLink></li>
        </ul>
      </div>
    )
  }

  renderWall(posts) {
    return (
      <PostsList posts={posts} id={this.id}/>
    )
  }

  renderFeed(posts) {
    return (
      <PostsList posts={posts} id={this.id}/>
    )
  }

  renderUsers(users) {
    return (
      <UsersList users={users}/>
    )
  }

  render() {
    if (this.state.loading) {
      return <h2>loading ... </h2>
    }

    return (
      <div>
        {this.renderProfile(this.state.user.profile)}
        <Switch>
          <Route path='/users/:id/followers' render={() => this.renderUsers(this.state.user.followers)}/>
          <Route path='/users/:id/followings' render={() => this.renderUsers(this.state.user.followings)}/>
          <Route path='/users/:id/feed' render={() => this.renderFeed(this.state.user.feed)}/>
          <Route path='/users/:id' render={() => this.renderWall(this.state.user.wall)}/>
        </Switch>
      </div>
    )
  }
}

const ProfileLink = (props) => {
  const {children, ...opts} = props;
  return (
    <NavLink className={s.link} activeClassName={s.activeLink} {...opts}>{children}</NavLink>
  )
}

const mapStateToProps = state => {
  return {
    profiles: state.facebook.profiles  
  }
}

export default withRouter(connect(mapStateToProps, { })(Profile))