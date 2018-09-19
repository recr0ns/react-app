import React, { Component } from "react";
import s from "./styles.scss";
import Block from "../../controlls/block";
import BookItem from "../../controlls/book_item";

class Recent extends Component {
  render() {
    return (
      <div class={s.content}>
        <h1>Recent</h1>
        <div className={s.row}>
          <BooksBlock title="Books">
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </BooksBlock>
        </div>
        <div className={s.double_column}>
            <Block title="Notes"></Block>
            <Block title="Statistics"></Block>
        </div>
      </div>
    );
  }
}

let BooksBlock = ({title, children}) => (
  <div className={s.books_block}>
    {title ? (<p className={s.block_title}>{title}</p>) : null}
    <div className={s.scrollable_block_content}>{children}</div>
  </div>
);


let ContentBlock = ({title, children}) => (
    <div className={s.block}>
      {title ? (<p className={s.block_title}>{title}</p>) : null}
      <div className={s.block_content}>{children}</div>
    </div>
  );

export default Recent;
