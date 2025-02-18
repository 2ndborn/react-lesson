import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
        this.inputName = React.createRef()
        this.inputCategory = React.createRef()
        this.inputComments = React.createRef()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='name'>Your name: </label>
                    <input
                        ref={this.inputName}
                        name='name' id='name'
                        type='text'
                    />
                </div>
                <div>
                    <label htmlFor='category'>Query category: </label>
                    <select 
                    ref={this.inputCategory}
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
                    ref={this.inputComments}
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