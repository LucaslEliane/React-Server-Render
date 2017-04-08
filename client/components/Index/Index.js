import React, { Component } from 'react'
import { Route } from 'react-router'

class Index extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <p>
          This is Root!
        </p>
      </div>
    )
  }
}

module.exports = Index