import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import s from './index.scss'

const mapStateToProps = state => {
  return {
    profile: state.facebook.profile
  }
}

class SidebarConnected extends Component {
  render() {
    return (
      <div>
        <h3>side</h3>
        <h4>Hello, {this.props.profile.name}!</h4>

        <ul>
          <NavigationLink to='/me' text='Profile'/>
          <NavigationLink to='/feed' text='Feed'/>
          <NavigationLink to='/wall' text='Wall'/>
          <NavigationLink to='/followers' text='Followers'/>
          <NavigationLink to='/followings' text='Followings'/>
        </ul>
      </div>
    )
  }
}

const NavigationLink = (props) => {
  const {text, ...opts} = props
  return (
    <NavLink className={s.link} activeClassName={s.activeLink} {...opts}>{text}</NavLink>
  )
}

const Sidebar = connect(mapStateToProps)(SidebarConnected)

export default Sidebar
