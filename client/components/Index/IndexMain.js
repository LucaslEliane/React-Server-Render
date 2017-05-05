import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './less/IndexMain.less'
import _dateConvert from '../../common/.internal/_dateConvert'

class IndexMain extends Component {
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
                {_dateConvert(value.passageTime)}
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
    const { fetching } = this.props.recommend.fetchingPassage

    return (
      <div className="index left">
        <div className="recommend-partition">
          {partitionArray}
        </div>
        <div className="ui one column centered grid">
          {passageArray}
        </div>
        <div className="ui segment" style={fetching ? { display: "none" } : { display: "block" } }>
          <div className="ui active inverted dimmer">
            <div className="ui small text loader">
              Loading
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexMain