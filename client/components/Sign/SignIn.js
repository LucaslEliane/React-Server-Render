import React from 'react'
import styles from './less/SignIn.less'
import { NavLink } from 'react-router-dom'
import SignOut from './SignOut'

class SignIn extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="sign">
        <div className="title">
          <h2>
            简书
          </h2>
        </div>
        <div className="content">
          <div className="toggle-sign">
            <NavLink to="/sign_in" activeClassName="active">登录</NavLink>
            <span>
              <p>
                ·
              </p>
            </span>
            <NavLink to="/sign_up" activeClassName="active">注册</NavLink>
          </div>
          <SignOut/>
        </div>
      </div>
    )
  }
}

export default SignIn