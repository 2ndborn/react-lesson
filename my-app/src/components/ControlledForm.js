import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: ' ',
        category: 'website',
        comments: ' ',
      }
    }

    // handleNameChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleQueryChange = (event) => {
    //     this.setState({
    //         query: event.target.value
    //     })
    // }

    // handleCommentChange = (event) => {
    //     this.setState({
    //         comment: event.target.value
    //     })
    // }

    handleChange = (event) => { // all of the name should match from the state and attributes
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='name'>Your name: </label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        name='name' id='name'
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='category'>Query category: </label>
                    <select 
                    onChange={this.handleChange} 
                    value={this.state.category}
                    name='category' 
                    id='category'
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='comments'>Comments: </label>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comments}
                        name='comments' id='comments'
                    />
                </div>
                <input type='submit' />
            </form>
        </div>
    )
  }
}

export default ControlledForm