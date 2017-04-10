import React, { Component } from 'react'
import { Route } from 'react-router'

class Index extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    )
  }
}

export default Index