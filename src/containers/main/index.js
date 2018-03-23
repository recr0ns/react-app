import React, { Component } from 'react'
import Profile from '../profile'
import { Switch, Route, Redirect } from 'react-router-dom'
import s from './main.scss'

import Posts from '../posts'
const Followers = Posts;
const Following = Posts;

export default class Main extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.left}>
          <Profile/>
        </div>
        <main className={s.main}>
          <Switch>
            <Route path="/Account/Followers" component={Followers}/>
            <Route path="/Account/Following" component={Following}/>
            <Route path="/Account/Posts" component={Posts}/>
            <Redirect to="/Account/Posts" />
          </Switch>
        </main>
      </div>
    )
  }
}
