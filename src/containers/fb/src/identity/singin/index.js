import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import { signIn } from '../../../actions'

class SignIn extends React.Component {
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

    const { history } = this.props

    const model = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.signIn(model, history)
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
          {this.props.signingIn && <h4>signing in...</h4>}
        </form>
        <Link to="/identity/sign-up">Do you want an account?</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    facebook : {
      auth: {
        signingIn
      }
    }
  } = state

  return {
    signingIn
  }
}

export default connect(mapStateToProps, {
  signIn
})(SignIn)
