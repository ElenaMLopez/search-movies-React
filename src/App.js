import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css'
import { MovieList } from './components/MoviesList';


class App extends Component {
  
   state = { results: [] }

  _handleResults = (results) => {
    console.log('Desde _handleResults: ', results);
    
    this.setState({ results })
  }

  render () {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="Search-Form--wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0 
          ? 'Sin resultados'
          : <MovieList movies={this.state.results}/>}
      </div>
    );
  }
}

export default App;
