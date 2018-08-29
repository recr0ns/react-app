import React, { Component } from 'react';
import s from './styles.scss';

class Block extends Component {
    render() {
        return (
            <div className={s.block}>
                {this.props.title ? (<p className={s.block_title}>{this.props.title}</p>) : null}
                <div className={s.block_content}>
                        {this.props.children}                    
                </div>
            </div>
        );
    }
}

export default Block;   