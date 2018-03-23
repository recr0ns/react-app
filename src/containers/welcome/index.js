import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import s from './welcome.scss'
import SignIn from '../signin'
import SignUp from '../signup'

export default class Welcome extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.content}>
          <Switch>
            <Route path='/Security/SignIn' component={SignIn}/>
            <Route path='/Security/SignUp' component={SignUp}/>
            <Redirect to='/Security/SignIn' />
          </Switch>
        </div>
      </div>
    )
  }
}
