import React, { Component } from "react";
import Layout from './components/bookshelf';

import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookmark, faStickyNote, faBookReader, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import s from './app.scss';

library.add(faBook, faBookmark, faStickyNote, faBookReader,faPlay, faPause)

class App extends Component {
  render() {
    return (
      <Layout/>
    );
  }
}

export default App;
