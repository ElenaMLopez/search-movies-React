import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CONFIG from '../config/apikey'

const API_KEY = CONFIG.key
export class Detail extends Component {
  static propTypes ={
    id: PropTypes.string
  }
  state = { movie: {} }
  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then( res => res.json())
      .then( movie => {        
        this.setState({ movie })
      })
  }

 componentDidMount () {
    const { id } = this.props
    this._fetchMovie({ id })
  }

  render () {
    const { 
      Actors,
      Metascore,
      Plot,
      Poster,
      Title
    } = this.state.movie    

    return (
      <main> cucu
        <h1 className='title'>{Title}</h1>
        <img src={Poster} alt={Title} />
        <p>{Actors}</p>
        <p>{Metascore}</p>
        <p>{Plot}</p>
      </main>
    )
  }
}