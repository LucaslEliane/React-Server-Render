import React, { Component } from 'react'
import { Route } from 'react-router'
import Index from '../Index/Index.js'
import Explore from '../Explore/Explore.js'

class Root extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/" component={Index}/>
        <Route path="/Explore" component={Explore}/>
      </div>
    )
  }
}

export default Root