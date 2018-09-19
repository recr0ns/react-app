import React, { Component } from "react";
import ePub from 'epubjs/dist/epub.js';

import s from "./styles.scss";

class Reader extends Component {
  componentDidMount() {
    let book = ePub("/books/alice.epub")
    var rendition = book.renderTo("book", { flow: "scrolled-doc", method: "continuous", width: "100%", height: "100%"});
    var displayed = rendition.display();
  }

  componentWillUnmount() {
    this.$el.somePlugin("destroy");
  }

  render() {
    return (
      <div className={s.reader}>
        <div id="book" className={s.book}  ref={el => (this.book = el)}/>
      </div>
    );
  }
  // render() {
  //     return (
  //         <div className={s.reader}>
  //             <EpubView
  //                 url={'/books/alice.epub'}
  //                 title={'Alice in wonderland'}
  //                 location={'epubcfi(/6/2[cover]!/6)'}
  //                 locationChanged={(epubcifi) => console.log(epubcifi)}
  //                 />
  //             <div className={s.settings} onClick={() => this.setState({ position: this.state.position + 1})}><FontAwesomeIcon icon='play'/></div>
  //         </div>
  //     );
  // }
}

export default Reader;
