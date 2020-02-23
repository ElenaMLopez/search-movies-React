import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  
   state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="Search-Form--wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 ? 'Sin resultados' : 'Con resultados'}
      </div>
    );
  }
}

export default App;
