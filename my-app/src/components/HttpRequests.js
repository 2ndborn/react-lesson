import React, { Component } from 'react'
import axios from 'axios'

export class HttpRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post: []
      }
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
    }
  render() {
    return (
      <div>HttpRequests</div>
    )
  }
}

export default HttpRequests