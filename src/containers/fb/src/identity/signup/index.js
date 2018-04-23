import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import c from '../../../constants'

const initialState = {
  email: 'ed.tishkin@gmail.com',
  password: 'P@ssw0rd',
  confirmPassword: 'P@ssw0rd',
  name: 'Eduard',
  birthday: '1991-05-12'
}

class SignUp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = initialState;
  }
  

  async handleSignUp(e) {
    e.preventDefault()

    const model = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      birthday: this.state.birthday
    }
    const resp = await axios.post("https://social-webapi.azurewebsites.net/api/identity/signup", model)
    
    this.props.history.push('/feed')
    console.log(resp)
  }

  handleChange(name, evt) {
    const value = evt.target.value

    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(c.Identity.SignUp)
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => this.handleSignUp(e)}>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
          <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.handleChange.bind(this, 'confirmPassword')}/>
          <br/>
          <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
          <input type="date" placeholder="Birth date" value={this.state.birthday} onChange={this.handleChange.bind(this, 'birthday')}/>
          <br/>
          <input type="submit" value="Sign Up"/>
        </form>
        <Link to="/identity/sign-in">Already has account?</Link>
      </div>
    )
  }
}

export default SignUp
