import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'
import { NavLink, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _addClass from '../../common/.internal/_addClass'
import _removeClass from '../../common/.internal/_removeClass'
import { updateUserLoginState } from '../../common/actions/actions'

import styles from './less/Header.less'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  toggleDropDown(event) {
    const className = this.refs.dropdown.className
    const classArr = className.trim().split(" ")
    ~classArr.indexOf('drop')
      ? this.refs.dropdown.className = _removeClass(className, 'drop')
      : this.refs.dropdown.className = _addClass(className, 'drop')
  }
  render() {
    console.log(this.props)
    const  { userState, updateUserLoginState }  = this.props

    return (
      <div className="ui secondary pointing menu navHeader clearfix">
        <NavLink className="headerItem item" activeClassName="active" exact to="/">首页 </NavLink>
        <NavLink className="headerItem item" activeClassName="active" exact to="/recommand">编辑选荐 </NavLink>
        <NavLink className="headerItem item" activeClassName="active" exact to="/frineds">好友 </NavLink>
        { !userState.loginState 
            ? ( <div className="right menu clearfix">
                <Link className="registerItem ui item" to="/sign_up">注册 </Link>
                <Link className="loginItem ui item" to="/sign_in">登录 </Link>
              </div>
            )
            : (
              <div className="right menu clearfix">
                <div className="userInfo ui item" 
                  onClick={this.toggleDropDown.bind(this)}
                >
                  <img src={ userState.userAvatar } alt={ userState.userID } />
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-jiantouxia"></use>
                  </svg>
                </div>
                <div className="header dropdown" ref="dropdown">
                  <ul>
                    <li>
                      <Link to="javascript:void(0)">
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-weibiaoti101"></use>
                        </svg>
                        我的主页
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-collect"></use>
                        </svg>
                        收藏的文章
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-shoucang"></use>
                        </svg>
                        喜欢的文章
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-set"></use>
                        </svg>
                        设置
                      </Link>
                    </li>
                    <li onClick={() => { updateUserLoginState(false) }}>
                      <a>
                        <svg className="icon" aria-hidden="true">
                          <use xlinkHref="#icon-20150509111341739easyiconnet"></use>
                        </svg>
                        退出
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { userState } = state
  return {
    userState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserLoginState: (cancelLogin) => {
      dispatch(updateUserLoginState(cancelLogin))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)