import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Index from '../Index/Index.js'
import Explore from '../Explore/Explore.js'
import Header from '../common/Header.js'

class Root extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/Explore" component={Explore}/>
        </Switch>
      </div>
    )
  }
}

export default Root