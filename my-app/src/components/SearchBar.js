import React, { Component } from 'react'
import importNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: importNames
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase();
        const filteredNames = importNames.filter((name) => {
          name.toLowerCase().includes(inputText)}
        )
        this.setState({
            names: filteredNames
        })
    }

  render() {
    return (
      <div>
        <h2>Search Names Here</h2>
        <p>Matching names matched <b>{this.state.names.length}</b></p>
        <input onChange={(event) => this.handleChange(event)} type="text" placeholder='search names...' />
        <div>
            {this.state.names.map(name => <p key={name}>{name}</p>)}
        </div>
      </div>
    )
  }
}

export default SearchBar