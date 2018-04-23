import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Feed extends Component {
  renderPosts() {
    if (this.props.feed.length === 0) {
      return <h3>There is nothing to read :(</h3>
    }
    return <h3>Posts count: {this.props.feed.length}</h3>
  }

  render() {
    return (
      <div>
        <h2>my news</h2>
        {this.renderPosts()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    feed: state.facebook.profile.feed || []
  }
}

export default withRouter(connect(mapStateToProps, {
})(Feed))