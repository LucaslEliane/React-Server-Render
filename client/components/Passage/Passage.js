import React, { Component } from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import PassageContent from './PassageContent'
import Loading from '../common/Loading'
// import PassageComment from './PassageComment'

class Passage extends Component {
  constructor(props) {
    super(props)
    console.log(props.passage)
  }

  isLoading(fetchingFullPassage, passage) {
    if (fetchingFullPassage) {
      return <Loading />
    } else {
      return (
        <div className="main-passage">
          <PassageContent passage={passage}/>
          {/*<PassageComment comment={passage.comment}/>*/}
        </div>
      )
    }
  }

  render() {
    const { fetchingFullPassage, passage } = this.props.passage
    return this.isLoading(fetchingFullPassage, passage)
  }
}

const mapStateToProps = function(state) {
  const { passage } = state
  return {
    passage
  }
}

export default connect(mapStateToProps)(Passage)