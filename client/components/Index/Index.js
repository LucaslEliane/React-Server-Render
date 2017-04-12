import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './less/Index.less'
import IndexNav from './IndexNav'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  createPartitionNode(partition) {
    let partitionArray = []
    _.isArray(partition) && partition.forEach((value, index) => {
      partitionArray.push((
        <div className="column partition"  key={index}>
          <a className="ui image label">
            <img src={value.avatar}/>
              {value.name}
          </a>
        </div>
      ))
    })
    partitionArray.push(
      <div className="column partition" key="more">
        <a className="ui image label">
          更多热门专题
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-icon07"></use>
          </svg>
        </a>
      </div>
    )
    return partitionArray
  }
  createPassageNode(passage) {
    let passageArray = []
    console.log(passage)
    _.isArray(passage) && passage.forEach((value, index) => {
      passageArray.push((
        <div className="column" key={`passage-${index}`}>
          <a className="wrap-img" href="javascript:void(0)">
            <img src={value.passageImage} alt=""/>
          </a>
          <div className="author">
            <a className="avatar">
              <img src={value.author.authorAvatar} alt=""/>
            </a>
            <div className="name">
              <a href="javascript:void(0)">
                {value.author.authorName}
              </a>
              <span className="time">
                {value.passageTime}
              </span>
            </div>
          </div>
          <a href="javascript:void(0)" className="title">
            {value.passageTitle}
          </a>
          <p className="abstract">
            {value.passageContent}
          </p>
          <div className="meta">
            <a href="javascript:void(0)" className="ui basic button">
              {value.partition.partitionName}
            </a>
            <a href="javascript:void(0)">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-chakan"></use>
              </svg>
              {value.passageView}
            </a>
            <a href="javascript:void(0)">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-7fuzhi"></use>
              </svg>
              {value.comment.length}
            </a>
            <a href="javascript:void(0)">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-heart"></use>
              </svg>
              {value.passagePrefer}
            </a>
          </div>
        </div>
      ))
    })
    return passageArray
  }
  render() {
    const partitionArray = this.createPartitionNode(this.props.recommend.partition)
    const passageArray = this.createPassageNode(this.props.recommend.passage)
    return (
      <div className="main content clearfix">
        <div className="index left">
          <div className="ui four column grid">
            {partitionArray}
          </div>
          <div className="ui one column centered grid">
            {passageArray}
          </div>
        </div>
        <IndexNav {...this.props}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { recommend } = state
  return {
    recommend
  }
}

export default connect(mapStateToProps)(Index)