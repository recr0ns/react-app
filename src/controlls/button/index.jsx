import React, { Component } from 'react';
import s from './styles.scss';

class Button extends Component {
    render() {
        return (
            <div className={s.btn}>
                {this.props.text}
            </div>
        );
    }
}

export default Button;