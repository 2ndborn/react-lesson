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
      .then(response => {
        console.log(response)
        this.setState({
          post: response.data,
        })
      })
    }
  render() {
    return (
      <div>
        <h2>Posts:</h2>
        {JSON.stringify(this.state.post)}
      </div>
    )
  }
}

export default HttpRequests