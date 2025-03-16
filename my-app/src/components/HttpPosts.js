import axios from 'axios'
import React, { Component } from 'react'

export class HttpPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         createPost: [],
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello world!',
                body: 'It works!!!',
                userID: 123
            }
        ).then(response => console.log(response))
    }
  render() {
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
      </div>
    )
  }
}

export default HttpPosts