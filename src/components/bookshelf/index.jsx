import React, { Component } from 'react';

import Block from '../../controlls/block';
import BookItem from '../../controlls/book_item';
import CodeBlock from '../../controlls/code_block';
import Button from '../../controlls/button';

import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-regular';
import s from './styles.scss';

class Layout extends Component {
    render() {
        return (
            <div className={s.layout}>
                <aside>
                    <div className={s.logo}>
                        <div className={s.logo_image}/>
                        Simple Reading
                    </div>
                    <nav>
                        <a href='#'>Collection</a>
                        <a href='#'>Bookmarks</a>
                        <a href='#'>Remarks</a>
                        <a href='#'>Reading list</a>
                    </nav>
                    <div className={s.aside_bottom}>
                    </div>
                </aside>
                <main>
                    <div className={s.main_scroll}>
                    <Block title="Recently viewed">
                        <BookItem/>
                        <BookItem/>
                        <BookItem/>
                        <BookItem/>
                    </Block>
                    <Block title="Recently viewed">
                        <h1>Hello</h1>
                        <CodeBlock text={'some text'} />
                        <Button text="Hello"/>
                    </Block>
                    </div>
                    
                </main>
            </div>
        );
    }
}

export default Layout;