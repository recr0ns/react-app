import React, { Component } from 'react'
import s from './cv.scss'

const initialState = {
  avatar: 'https://avatars2.githubusercontent.com/u/2689431?s=460&amp;v=4',
  name: 'Eduard Tishkin',
  email: 'ed.tishkin@gmail.com',
  skills: [
    {type: '.net', level: 7, tags: ['dotnet core', 'ASP.NET MVC', 'DI', 'WEB API', 'Dapper', 'Entity Framework',  'linq2db', 'MSTest']},
    {type: 'databases', level: 6, tags: ['MS SQL Server', 'Redis', 'SQL']},
    {type: 'js', level: 5, tags: ['ES6', 'React', 'Redux']},
    {type: 'other', tags: ['ELK', 'TeamCity', 'git', 'JIRA', 'Confluence']}
  ],
  social: [
    {id: 'github', link: ''},
    {id: 'linkedin', link: ''},
    {id: 'facebook', link: ''},
  ]
}

export default class CV extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  componentDidMount() {
    this.setState(initialState)
  }

  render() {
    return (
      <div className={s.content}>
        <div className={s.short_content}>
          <div className={s.info_block}>
            <div className={s.avatar}>
              <img className={s.avatar_image} src={this.state.avatar}/>
            </div>
            <h1>{this.state.name}</h1>
            <p className={s.style}>@passionate software engineer</p>
            <h3><a href={`mailto:${this.state.email}`}><span>{this.state.email}</span></a></h3>
          </div>
          <div className={s.skills_block}>
            {this.state.skills.map(s => RenderSkill(s))}
          </div>
          <div className={s.social_block}>
            {this.state.social.map(s => RenderSocial(s))}
          </div>
        </div>
        <div className={s.long_content}>
          <p style={{background: 'red', height: '1300px' }}>Some Long content</p>
        </div>
      </div>
    )
  }
}


const RenderSocial = (item) => {
  return (
    <a className={s.social_button} target="_blank" href={item.link}><span className={`icon-${item.id}`}></span></a>
  )
}

const RenderSkill = (item) => {
  return (
    <div className={s.tech_block}>
      <h4>{item.type}</h4>
      {
        (() => {
          if (item.level) {
            return (<div className={s.progress}><div className={s.progress_value} style={{width: `${item.level*10}%`}}></div></div>)
          }
        })()
      }
      <div className={s.tag_list}>
        {item.tags.map(t => (<span className={s.tag}>{t}</span>))}
      </div>
    </div>
  )
}