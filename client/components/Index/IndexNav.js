import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './less/IndexNav.less'

class HotContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="hot">
        <a href="javascript:void(0)" className="ui basic button">
          新上榜 >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zhuzhuangtu"></use>
          </svg>
        </a>
        <a href="javascript:void(0)" className="ui basic button">
          日报 >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-iconbaozhi"></use>
          </svg>
        </a>
        <a href="javascript:void(0)" className="ui basic button">
          7日热门 >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-huo"></use>
          </svg>
        </a>
        <a href="javascript:void(0)" className="ui basic button">
          30日热门 >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-hot"></use>
          </svg>
        </a>
        <div className="download-app">
          <span>下载难书手机爱啪啪 ></span>
          <span>随时随地发现和创作内容</span>
          <div className="download">
            <a href="javascript:void(0)" className="ui basic button">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-chuanchengshejiiconzitihua01"></use>
              </svg>
              扫码
            </a>
            <a href="javascript:void(0)" className="ui basic button">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-iconfontanzhuo"></use>
              </svg>
              安卓
            </a>
            <a href="javascript:void(0)" className="ui basic button">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-pingguo"></use>
              </svg>
              iOS
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class IndexNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="index right clearfix">
        <HotContent>
        </HotContent>
      </div>
    )
  }
}

export default IndexNav