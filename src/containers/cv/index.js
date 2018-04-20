import React from 'react'
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to='/hello'>Hello</Link>
      <Switch>
        <Route exact path="/" component={Default}/>
        <Route path="/hello" component={Hello}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  )
}

const Default = () => {
  return (
    <div>
      <h1>Default</h1>
    </div>
  )
}

const Hello = () => {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  )
}

const NoMatch = () => {
  return (
    <h2>Sorry, 404</h2>
  )
}