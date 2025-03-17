import axios from 'axios'
import React, { Component } from 'react'

export class HttpPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postApiResponse: null,
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello world!',
                body: 'It works!!!',
                userId: 123
            }
        ).then(response => this.setState({
          postApiResponse: response.data
        }))
    }
  render() {
    const {postApiResponse} = this.state
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        {
          postApiResponse
          ? (<idv>
            <h1>{postApiResponse.title}</h1>
            <p>Post id: {postApiResponse.id}</p>
            <p>{postApiResponse.body}</p>
            <p>User id: {postApiResponse.userId}</p>
          </idv>)
          : (<p>Please click the button above</p>)
        }
      </div>
    )
  }
}

export default HttpPosts