import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.scss'

const UsersList = ({users}) => (
  <ul className={s.users}>
    {users.map(u => <UserCard {...u} key={u.id}/>)}
  </ul>
)

const UserCard = ({id, name, imageUrl}) => {
  return (
    <li>
      <Link className={s.user} to={`/users/${id}`}>
        <Avatar src={imageUrl} className={s.avatar}/>
        <span className={s.name}>{name}</span>
      </Link>
    </li>
  )
}

const Avatar = ({src, className}) => {
  return (
    <div className={className}>
      <img src={src? src: '/images/incognito.png'} alt='avatar'/>
    </div>
  )
}

export default UsersList