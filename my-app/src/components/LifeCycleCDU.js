import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCycleCDUChild'

export class LifeCycleCDU extends Component {
    constructor(props) {
        console.log('constructor called')
      super(props)
    
      this.state = {
         greeting: 'Hello',
      }
    }

    updateGreeting = () => {
        console.log('greeting called')
        this.setState((prevState) => ({
            greeting: prevState.greeting === 'Hello' ? 'Goodbye' : 'Hello'
        }))
    }

    componentDidUpdate() {
        console.log('component updated')
    }

  render() {
    console.log('render called')
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <button onClick={() => this.updateGreeting()}>Update greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
      </div>
    )
  }
}

export default LifeCycleCDU