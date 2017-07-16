import React from 'react';
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import styles from './less/Settings.less';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router basename="/settings/">
        <div className="setting-content">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/basic">基本设置</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/profile">个人简介</NavLink>
            </li>
          </ul>
          <RightContent />
        </div>
      </Router>
    )
  }
}

class RightContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/basic" component={Basic}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    )
  }
}

class Basic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>基本设置</span>
      </div>
    )
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>个人简介</span>
      </div>
    )
  }
}

export default Settings;