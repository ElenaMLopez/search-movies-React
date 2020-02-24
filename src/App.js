import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

import { Detail } from './pages/Detail'

import './App.css';
import 'bulma/css/bulma.css'
import { MovieList } from './components/MoviesList';


class App extends Component {
  
   state = { usedSearch: false, results: [] }

  _handleResults = (results) => {    
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0 
      ? <p>Sorry no results! <span role="img" aria-label=''>😳</span></p>
      : <MovieList movies={this.state.results}/>
  }

  render () {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail />
    }

    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="Search-Form--wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch 
          ? this._renderResults() 
          : <small>Use the form to search</small>}
      </div>
    );
  }
}

export default App;
