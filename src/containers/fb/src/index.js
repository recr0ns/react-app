import React, { Component } from 'react'
import { Switch, Route, NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { init } from '../actions'

import Identity from './identity'
import Content from './content'
import s, {link, active_link} from './index.scss'

const mapStateToProps = state => { return {
    auth: state.facebook.auth.isAuthorized
  }
}

class Facebook extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div className={s.main}>
        <header>
          <h1>Hello, kitty</h1>
          { this.props.auth ? AuthNavigation() : UnauthorizedNavigation() }
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/identity" component={Identity}/>
            <Route path="/feed" component={Content}/>
            <Route path="/users" component={Content}/>
            <Route component={Page404} />
          </Switch>
        </main>
      </div>
    )
  }
}

const AuthNavigation = () => {
  return (
    <nav>
      <ul>
        <li><HeaderLink exact to='/' text='Home'/></li>
        <li><HeaderLink to='/feed' text='Feed'/></li>
        <li><HeaderLink to='/users' text='Users'/></li>
        <li><HeaderLink to='/identity/logout' text='Log Out'/></li>
      </ul>
    </nav>
  )
}

const UnauthorizedNavigation = () => {
  return (
    <nav>
      <ul>
        <li><HeaderLink className={s.link} activeClassName={active_link} exact to='/' text='Home'/></li>
        <li><HeaderLink className={s.link} activeClassName={active_link} to='/identity' text='Sign In'/></li>
      </ul>
    </nav>
  )
}

const HeaderLink = (props) => {
  return (<NavLink className={link} activeClassName={active_link} {...props}>{props.text}</NavLink>)
}

const Main = () => {
  return (
    <div className={s.general}></div>
  )
}

const Page404 = () => {
  return (
    <div className={s.page404}>
      <img className={s.image} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5NS45OTYgMjk1Ljk5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk1Ljk5NiAyOTUuOTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CjxnPgoJPHBhdGggZD0iTTE0Ny45OTgsMEM2Ni4zOTIsMCwwLDY2LjM5MiwwLDE0Ny45OThzNjYuMzkyLDE0Ny45OTgsMTQ3Ljk5OCwxNDcuOTk4YzgxLjYwNiwwLDE0Ny45OTgtNjYuMzkyLDE0Ny45OTgtMTQ3Ljk5OCAgIFMyMjkuNjA0LDAsMTQ3Ljk5OCwweiBNMTQ3Ljk5OCwyNzkuOTk2Yy0zNi4yNTcsMC02OS4xNDMtMTQuNjk2LTkzLjAyMi0zOC40NGMtOS41MzYtOS40ODItMTcuNjMxLTIwLjQxLTIzLjkzNC0zMi40MiAgIEMyMS40NDIsMTkwLjg0NywxNiwxNzAuMDQ4LDE2LDE0Ny45OThDMTYsNzUuMjE0LDc1LjIxNCwxNiwxNDcuOTk4LDE2YzM0LjUyMywwLDY1Ljk4NywxMy4zMjgsODkuNTMzLDM1LjEwMiAgIGMxMi4yMDgsMTEuMjg4LDIyLjI4OSwyNC44NDQsMjkuNTU4LDM5Ljk5NmM4LjI3LDE3LjIzOSwxMi45MDcsMzYuNTM4LDEyLjkwNyw1Ni45ICAgQzI3OS45OTYsMjIwLjc4MiwyMjAuNzgyLDI3OS45OTYsMTQ3Ljk5OCwyNzkuOTk2eiIgZmlsbD0iI2ExYTFhMSIvPgoJPHBvbHlnb24gcG9pbnRzPSI3OS45MTcsMTQ3Ljk1MyA5Ny45ODgsMTI5Ljg4MSAxMTYuMDYsMTQ3Ljk1MyAxMjcuMzc0LDEzNi42MzkgMTA5LjQzMywxMTguNjk4IDEyNy4zNzMsMTAwLjc2IDExNi4wNjEsODkuNDQ1ICAgIDk3Ljk4OCwxMDcuNTE3IDc5LjkxNiw4OS40NDUgNjguNjA0LDEwMC43NiA4Ni41NDQsMTE4LjY5OCA2OC42MDMsMTM2LjYzOSAgIiBmaWxsPSIjYTFhMWExIi8+Cgk8cG9seWdvbiBwb2ludHM9IjE3OS45MTcsMTQ3Ljk1MyAxOTcuOTg4LDEyOS44ODEgMjE2LjA2LDE0Ny45NTMgMjI3LjM3NCwxMzYuNjM5IDIwOS40MzMsMTE4LjY5OCAyMjcuMzczLDEwMC43NiAyMTYuMDYxLDg5LjQ0NSAgICAxOTcuOTg4LDEwNy41MTcgMTc5LjkxNiw4OS40NDUgMTY4LjYwNCwxMDAuNzYgMTg2LjU0NCwxMTguNjk4IDE2OC42MDMsMTM2LjYzOSAgIiBmaWxsPSIjYTFhMWExIi8+Cgk8cGF0aCBkPSJNMjI3LjY2NCwxODkuOTk3aC0xNjB2MTZoOTR2MTJjMCwxNi43MDgsMTIuNjUxLDMwLjU0NiwyOC43NzksMzIuNjk5YzEuNDM2LDAuMTkyLDIuOTgzLDAuMzAxLDQuNDcxLDAuMzAxICAgYzE1LjQ5MywwLDI4LjM5NS0xMC43MzQsMzEuOTI1LTI1LjE1NWMwLjYxNi0yLjUxNywwLjgyNS01LjE0MiwwLjgyNS03Ljg0NVYxODkuOTk3eiBNMTc3LjY2NCwyMDUuOTk3aDM0djEyICAgYzAsOS4zNzQtNy42MjYsMTctMTcsMTdjLTkuMzc0LDAtMTctNy42MjYtMTctMTdWMjA1Ljk5N3oiIGZpbGw9IiNhMWExYTEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"></img>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The Page you are looking for doesn't exists or an other error occured.<br/><Link to='/'>Go to main</Link> to choose new direction.</p>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, {
  init
})(Facebook))