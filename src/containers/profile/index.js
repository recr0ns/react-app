import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import s from './profile.scss'

const initialState = {
  avatar: "https://avatars2.githubusercontent.com/u/2689431?s=460&amp;v=4",
  name : "Eduard Tishkin",
  followers: 31,
  following: 123,
  posts: 0,
  about: "some interestin information",
  active: 1,
}

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
  }
  
  render() {
    console.log(this.state.avatar)
    return (
      <div className={s.block}>
        <Avatar url={this.state.avatar}/>
        <h1>{this.state.name}</h1>
        <ul className={s.buttons}>
          <li>
            <Link className={s.button} to="/Account/Followers" activeClassName={s.button_active}>
              <p className={s.button_text}>followers</p>
              <p className={s.button_counter}>{this.state.followers}</p>
              <span className={s.button_indicator}></span>
            </Link>
          </li>
          <li>
            <Link className={s.button} to="/Account/Posts" activeClassName={s.button_active}>
              <p className={s.button_text}>posts</p>
              <p className={s.button_counter}>{this.state.posts}</p>
              <span className={s.button_indicator}></span>
            </Link>
          </li>
          <li>
            <Link className={s.button} to="/Account/Following" activeClassName={s.button_active}>
              <p className={s.button_text}>following</p>
              <p className={s.button_counter}>{this.state.following}</p>
              <span className={s.button_indicator}></span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

const Avatar = ({url}) => (
  <div className={s.avatar}>
    <img className={s.avatar_image} src={url}/>
  </div>
)
