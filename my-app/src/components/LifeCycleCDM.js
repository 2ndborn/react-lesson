import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCycleCDMChild'

export class LifeCycleCDM extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: 'Loading...',
    }
  }

  getData() {
    console.log('getData called')
    setTimeout(() => {
      console.log('data fetched')
      this.setState({
        data: 'Loaded',
      })
    }, 3000)
  }

  componentDidMount() {
    console.log('component did mount')
    this.getData()
  }
    
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <LifeCyclesCDMChild />
      </>
    )
  }
}

export default LifeCycleCDM