import React, { Component } from "react";
import CodeBlock from './components/code_block';

import s from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={s.content_block}>
        <h1>Hello</h1>
        <CodeBlock text={'some text'} />
      </div>
    );
  }
}

export default App;
