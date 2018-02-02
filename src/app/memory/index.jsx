import React, { Component } from 'react'
import _ from 'lodash'
import classnames from 'classnames/bind'

import s from './memory.scss'

const initialState = {
  size: 4,
  timeout: 2000,
  field: [],
  actions: 0,
  opened
}

export default class Memory extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  static get Icons() {
    return '⏰💣🏀🎱🥊🏆🌚🐵🐷🦊🐶👺🎃👽💀💩🍀🔥⚡🐡🐙🐢🐞🦋☂️🌞🍄🎯🥁🍎🍓🥝🍞🧀🍔🍦'
  }

  generate() {
    const size = this.state.size;
    var icons = _.shuffle(_.flatMap(_take(_.shuffle(_.chunk(Icons,1)), size*size/2), (icon) => [icon, icon]))
    let field = []
    
    for (let i=0; i<size; i++) 
    for (let j=0; j<size; j++){
      field.push({icon: icons.pop()})
    }

    this.setState({field: field})
  }

  open(x,y) {
    this.setState()
  }
  
  render() {
    return (
      <div>
        <div>

        </div>
        <div className>

        </div>
      </div>
    )
  }
}
