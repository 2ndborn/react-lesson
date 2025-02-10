import React, { Component } from 'react'

export class ConditionalRenderClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: false,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the following:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>subscribe to the newsletter</li>
                </ol>
            </div>
        ) : (<p>Please sign up</p>)}
      </div>
    )
  }
}

export default ConditionalRenderClass