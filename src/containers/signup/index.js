import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import s from './signup.scss'

export default class SignUp extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.logo}></div>
        <h1 className={s.title}>Social Kitty</h1>
        <div className={s.divider}/>
        <h2>sing up</h2>
        <Input type="text" placeholder="Email" icon="envelope"/>
        <Input type="text" placeholder="Name" icon="user"/>
        <Input type="text" placeholder="Age" icon="profile"/>
        <Text placeholder="About"/>
        <div className={s.divider}/>

        <Input type="password" placeholder="Password" icon="key"/>
        <Input type="password" placeholder="Confirm password" icon="key"/>
        <div className={s.divider}/>
        
        <RedirectButton/>
        <Link className={s.signup} to="SignIn">Already have account?</Link>
      </div>
    )
  }
}

const Input = ({type, placeholder, icon}) => {
  let i = icon ? (<span className={s.input_icon}><i className={`fa fa-${icon}`}></i></span>) : null;
  return (
    <div className={s.input_block}>
      <input type={type} placeholder={placeholder} className={s.input}/>
      {i}
    </div>
  )
}

const Text = ({type, placeholder, icon}) => {
  let i = icon ? (<span className={s.input_icon}><i className={`fa fa-${icon}`}></i></span>) : null;
  return (
    <div className={s.text_block}>
      <textarea type={type} placeholder={placeholder} className={s.input}/>
    </div>
  )
}

const Checkbox = ({text}) => {
  return (
    <div className={s.checkbox_group}>
      <input className={s.checkbox} type="checkbox"/>
      <span>{text}</span>
    </div>
  ) 
}

const RedirectButton = withRouter(({history}) => {
  return (
    <button className="button" onClick={() => { history.push('/Account') }} type="submit">
    <i className="fa fa-paw"></i> 
    MEOW
    </button>
  )
})
