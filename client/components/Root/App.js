import React, { Component } from 'react'
import { Route } from 'react-router'

if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const Index = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../Index/Index'))
  }, 'index')
}

class Root extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/" component={Index} />
      </div>
    )
  }
}

export default Root