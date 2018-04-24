import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import s from './index.scss'

const Post = ({id, imageUrl, text, dateTime, user, isYours}) => (
  <li>
    <div className={s.post}>
      <div className={s.content}>
        {imageUrl && <img className={s.image} src={imageUrl}/>}
        <span className={s.text}>{text}</span>
      </div>
      <Author time={dateTime} isYours={isYours} user={user}/>
    </div>
  </li>
)

const Author = ({user, time, isYours}) => {
  return (
    <div className={s.author}>
      <div className={s.info}>
        <Link to={`/users/${user.id}`}>
          <div className={s.avatar}>
            <img src={user.imageUrl || '/images/incognito.png'} alt='avatar'/>
          </div>
          <span>{user.name}</span>
        </Link>
      </div>
      <div className={s.time}>
        {moment(time).format('HH:mm')}
      </div>
    </div>
  )
} 

const PostsList = ({posts, id}) => (
  <ul className={s.list}>{posts.map(p => <Post key={p.id} {...p} isYours={id === p.user.id}/>)}</ul>
)

export {
  PostsList
}

export default Post;