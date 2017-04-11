import React, { Component } from 'react'
import { Route } from 'react-router'
import { fetchRecomment } from '../../common/actions/actions'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './Index.less'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  createPartitionNode(partition) {
    let partitionArray = []
    _.isArray(partition) && partition.forEach((value, index) => {
      partitionArray.push((
        <div className={"column " + styles.partition} key={index}>
          <img src={value.avatar} className={styles.avatar}/>
          <label>{value.name}</label>
        </div>
      ))
    })
    return partitionArray
  }
  render() {
    const partitionArray = this.createPartitionNode(this.props.recommend.partition)
    return (
      <div className="ui four column grid">
        {partitionArray}
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