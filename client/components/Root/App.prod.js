import React, { Component } from 'react'
import { Route } from 'react-router'
import loadIndex from 'bundle-loader?lazy&name=[name]!/client/components/Index/Index.js'
import loadExplore from 'bundle-loader?lazy&name=[name]!/client/components/Explore/Explore.js'

class Bundle extends Component {

  constructor() {
    super()
    this.state = {
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}

const Index = () => (
  <Bundle load={loadIndex}>
    {(Index) => <Index/>}
  </Bundle>
)

const Explore = () => (
  <Bundle load={loadExplore}>
    {(Explore) => <Explore/>}
  </Bundle>
)

class Root extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/" component={Index}/>
        <Route path="/Explore" component={Explore}/>
      </div>
    )
  }
}

export default Root