import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'
import { NavLink, withRouter, Link } from 'react-router-dom'

import styles from './Header.less'

console.log(styles)

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleActive = this.toggleActive.bind(this)
  }
  toggleActive() {

  }
  render() {
    return (
      <div className="ui secondary pointing menu navHeader">
        <NavLink className="headerItem item" activeClassName="active" exact to="/">首页 </NavLink>
        <NavLink className="headerItem item" activeClassName="active" exact to="/recommand">编辑选荐 </NavLink>
        <NavLink className="headerItem item" activeClassName="active" exact to="/frineds">好友 </NavLink>
        <div className="right menu">
          <Link className="loginItem ui item" to="/login">登录 </Link>
        </div>
      </div>
    )
  }
}

export default Header