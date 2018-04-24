import React from 'react'
import { Switch, Route } from 'react-router-dom'

import s from './index.scss'

import SignIn from './singin'
import SignUp from './signup'
import LogOut from './logout'

export default () => {
  return (
    <div className={s.identity}>
      <Switch>
        <Route exact path='/identity/logout' component={LogOut}/>
        <Route path='/identity/sign-up' component={SignUp}/>
        <Route path='/identity/' component={SignIn}/>
      </Switch>
    </div>
  )
}
