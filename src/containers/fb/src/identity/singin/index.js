import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import axios from 'axios'

import { setToken } from '../../../actions'

const mapDispatchToProps = dispatch => { 
  return {
    setToken: token => dispatch(setToken(token))
  }
}

class SignInConnected extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: "ed.tishkin@gmail.com",
       password: "P@ssw0rd"
    }
  }

  handleChange(name, evt) {
    const value = evt.target.value

    this.setState({
      [name]: value
    })
  }

  async handleSignIn(e) {
    e.preventDefault();

    const model = {
      email: this.state.email,
      password: this.state.password
    }
    const resp = await axios.post('https://social-webapi.azurewebsites.net/api/identity/signin', model)
    this.props.setToken(resp.data.token)
    
    this.props.history.push('/feed')
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={(e) => this.handleSignIn(e)}>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          <br/>
          <input type="submit" value="Sign in"/>
        </form>
        <Link to="/identity/sign-up">Do you want an account?</Link>
      </div>
    )
  }
}

const SignIn = connect(null, mapDispatchToProps)(SignInConnected)

export default SignIn
