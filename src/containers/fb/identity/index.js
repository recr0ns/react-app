import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './singin'
import SignUp from './signup'

export default () => {
  return (
    <div>
      <Switch>
        <Route path='/identity/sign-up' component={SignUp}/>
        <Route path='/identity/' component={SignIn}/>
      </Switch>
    </div>
  )
}
