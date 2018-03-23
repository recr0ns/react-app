import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import s from './signin.scss'

export default class SignIn extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.logo}></div>
        <h1 className={s.title}>Social Kitty</h1>
        <div className={s.divider}/>
        <h2>sing in</h2>
        <Input type="text" placeholder="Email" icon="envelope"/>
        <Input type="password" placeholder="Password" icon="key"/>
        <div className={s.actions}>
        <Checkbox text="Remember me"/>
        
        </div>
        <Button text="MEOW!"/>
        <Link className={s.signup} to="SignUp">Don't have account?</Link>
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

const Checkbox = ({text}) => {
  return (
    <div className={s.checkbox_group}>
      <input className={s.checkbox} type="checkbox"/>
      <span>{text}</span>
    </div>
  ) 
}

const Button = ({type, text}) => {
  return (<button className="button" type="submit">
  <i className="fa fa-paw"></i> 
  {text}
  </button>)
}
