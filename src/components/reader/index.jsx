import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {EpubView} from 'react-reader';

import s from './styles.scss';

class Reader extends Component {
    constructor(){
        super()
        this.state = {
            position: 1
        }
    }
    render() {
        return (
            <div className={s.reader}>
                <EpubView
                    url={'/books/alice.epub'}
                    title={'Alice in wonderland'}
                    location={'epubcfi(/6/2[cover]!/6)'}
                    locationChanged={(epubcifi) => console.log(epubcifi)}
                    />
                <div className={s.settings} onClick={() => this.setState({ position: this.state.position + 1})}><FontAwesomeIcon icon='play'/></div>    
            </div>
        );
    }
}

export default Reader;