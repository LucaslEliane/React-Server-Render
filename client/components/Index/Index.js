import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './less/Index.less'
import IndexNav from './IndexNav'
import IndexMain from './IndexMain'
import { requestRecommendPassage, fetchRecommendPassage } from '../../common/actions/actions'

class Index extends Component {
  constructor(props) {
    super(props)
    this.documentScroll = this.documentScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.documentScroll)
  }
  
  documentScroll(event) {
    const { dispatch } = this.props
    const documentElement = document.documentElement
    let offset = documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    documentElement.scrollHeight == documentElement.clientHeight + offset 
      && dispatch(requestRecommendPassage()) && dispatch(fetchRecommendPassage('default'))
  }

  render() {
    return (
      <div className="main content clearfix">
        <IndexMain {...this.props}>
        </IndexMain>
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