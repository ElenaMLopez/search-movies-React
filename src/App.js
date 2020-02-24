import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { Movie } from './components/Movie'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  
   state = { results: [] }

  _handleResults = (results) => {
    console.log('Desde _handleResults: ', results);
    
    this.setState({ results })
  }

  _renderResults () {
    const { results } = this.state
    return results.map(movie => {
      return (
        <div key={ movie.imdbID }>
          {/* <p  >{movie.Title}</p> */}
          <Movie 
            title={ movie.Title}
            year={ movie.Year }
            poster={movie.Poster}
          />

        </div>
    )
    })    
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
          : this._renderResults()}
      </div>
    );
  }
}

export default App;
