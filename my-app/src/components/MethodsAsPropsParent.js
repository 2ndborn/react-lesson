import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }

    handleSignIn = () => {
      this.setState({
        isLoggedIn: true,
      })
    }

    handleSignOut = () => {
      this.setState({
        isLoggedIn: false,
      })
    }

    //The code to handle both log in and out.
    // toggleLogIn = () => {
    //   this.setState((prevState) => ({
    //     isLoggedIn: !prevState.isLoggedIn, //is not the previous state
    //   }))
    // }

  render() {
    return (
      <div>
        <MethodsAsPropsChild 
        isLoggedIn={this.state.isLoggedIn} 
        handleSignIn={this.handleSignIn} 
        handleSignOut={this.handleSignOut} 
        />
      </div>
    )
  }
}

export default MethodsAsPropsParent