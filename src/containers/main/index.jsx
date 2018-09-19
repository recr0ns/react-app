import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import SideBar from '../../components/side_menu'
import Recent from '../../components/recent'

import s from './styles.scss'

class Main extends Component {
    render() {
        return (
            <div className={s.layout}>
                <aside>
                    <div className={s.logo}>
                        <div className={s.logo_image}/>
                        Simple Reading
                    </div>
                    <SideBar/>
                </aside>
                <main>
                    <Switch>
                        <Route exact path='/' component={Recent}/>
                        <Route path='/collections' component={Collections}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

let Collections = () => <h1>Collections</h1>

export default Main;