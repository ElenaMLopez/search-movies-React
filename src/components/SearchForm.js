import React, { Component } from 'react'
import CONFIG from '../config/apikey.json'


const API_KEY = CONFIG.key
export class SearchForm extends Component {
  state = { inputMovie: '' }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputMovie}&plot=full`) // devuelve más información
      .then( res => res.json())
      .then( results => {        
        const { Search, totalResults} = results
        this.props.onResults(Search)
      })
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              onChange={this._handleChange}
              type="text" 
              placeholder="Find a repository" 
            />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
      )
    }
  }