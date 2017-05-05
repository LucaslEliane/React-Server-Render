import React from 'react'
import styles from './less/SignOut.less'
import { Link } from 'react-router-dom'

class SignOut extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="sign-in">
        <form action="/api/signIn" method="post">
          <div className="input">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-weibiaoti101"></use>
            </svg>
            <input type="text" name="username" placeholder="手机号或邮箱"/>
          </div>
          <div className="input">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-mima"></use>
            </svg>
            <input type="password" name="password" placeholder="密码"/>
          </div>
          <div className="remember-me clearfix">
            <input type="checkbox"/>
            <span>
              <p>记住我</p>
            </span>
            <Link to="javascript:void(0)">登录遇到问题?</Link>
          </div>
          <div className="submit">
            <input type="submit"/>
          </div>
        </form>
        <div className="social-account login">
          <h6>
            社交账号登录
          </h6>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-weibo"></use>
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-weixin"></use>
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-qq"></use>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default SignOut