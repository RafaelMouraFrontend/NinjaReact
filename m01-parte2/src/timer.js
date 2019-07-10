'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.timer
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }
  shouldComponentUpdate (nextProps, nextState) {
    //  console.log('shouldComponentUpdate', this.state, nextState)
    return this.props.time !== nextProps.time
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDitUpdate timer', this.props, prevProps)
  }
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
