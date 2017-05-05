import React from 'react'
import styles from './less/Loading.less'

export default class Loading extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui small text loader">
            Loading
          </div>
        </div>
      </div>
    )
  }
}