import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './styles.scss';

class Player extends Component {
    constructor() {
        super()
        this.state = {
            playing : false,
            progress: 60
        }
    }
    render() {
        return (
            <div className={s.player}>
                <div className={s.actions}>
                    <button className={s.actionButton} onClick={() => this.setState({playing : !this.state.playing})}>
                        <FontAwesomeIcon icon={this.state.playing ? 'pause' : 'play'}/>
                    </button>
                </div>
                <div className={s.content}>
                    <Progress time={"- 0:43"} progress={this.state.progress}/>
                    <p>{this.props.bookName}</p>
                </div>
            </div>
        );
    }
}

let Progress = ({time, progress}) => 
    <div className={s.progress}>
        <div className={s.bar_outer}>
            <div className={s.bar_inner} style={{width: `${progress}%`}}></div>
        </div>
        <div className={s.time}>
            <span>{time}</span>
        </div>
    </div>

export default Player;