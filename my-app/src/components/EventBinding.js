import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         introduction: "Hello",
         buttonText: "Exit",
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
        }))
    }

  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        <button onClick={() => this.handleClick()}>Button</button>
      </div>
    )
  }
}

export default EventBinding