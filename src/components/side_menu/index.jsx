import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './styles.scss'

class SideMenu extends Component {
    render() {
        return (
            <div className={s.menu}>
                <NavLink activeClassName={s.active} exact to='/'><FontAwesomeIcon className={s.icon} icon="th-large" /> Recent</NavLink>
                <NavLink activeClassName={s.active} to='/collections'><FontAwesomeIcon className={s.icon} icon="book" /> Collections</NavLink>
                <NavLink activeClassName={s.active} to='/bookmarks'><FontAwesomeIcon className={s.icon} icon="bookmark" /> Bookmarks</NavLink>
                <NavLink activeClassName={s.active} to='/Notes'><FontAwesomeIcon className={s.icon} icon="sticky-note"/> Notes</NavLink>
                <NavLink activeClassName={s.active} to='/Reading'><FontAwesomeIcon className={s.icon} icon="book-reader"/> Reading</NavLink>
            </div>
        );
    }
}

export default SideMenu;
