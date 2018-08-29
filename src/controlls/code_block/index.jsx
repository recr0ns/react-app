import React, { Component } from "react";
import s from "./styles.scss";

class CodeBlock extends Component {
  render() {
    return (
      <div className={s.block}>
        <div className={s.header}>
          <div className={s.header_actions}>
            <span className={s.header_action_close_btn} />
            <span className={s.header_action_mini_btn} />
            <span className={s.header_action_maxi_btn} />
          </div>
        </div>
        <div class={s.content}>
            <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default CodeBlock;
