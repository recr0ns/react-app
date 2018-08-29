import React, { Component } from 'react';
import s from './styles.scss';

class BookItem extends Component {
    render() {
        return (
            <div className={s.item}>
                <div className={s.item_cover}>
                </div>
                <h2>Le Petit Prince</h2>
                <h3>Antoine de Saint-Exupéry</h3>
                <div></div>
            </div>
        );
    }
}

export default BookItem;