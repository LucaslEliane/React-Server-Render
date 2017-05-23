import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Index from '../Index/Index.js'
import Passage from '../Passage/Passage.js'
import Header from '../common/Header.js'
import SignIn from '../Sign/SignIn.js'
import Users from '../Users/Users.js'


class Root extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (<div><Header/><Index/></div>)}/>
        <Route exact path="/passage/:id" render={() => (<div><Header/><Passage/></div>)}/>
        <Route exact path="/sign_in" component={ SignIn }></Route>
        <Route exact path="/users/:userID" render={() => (<div><Header/><Users/></div>)}/>
      </Switch>
    )
  }
}

export default Root