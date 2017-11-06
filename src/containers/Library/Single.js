// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Utils
import { isFirstRender } from '../../lib/utils/frontend'

// Actions
import * as actions from './actions'


class Single extends Component {
  static propTypes = {
    book: PropTypes.array.isRequired,
    loadSingleBook: PropTypes.func.isRequired,
  }

  componentWillMount(){
    const {
      match:{
        params:{
          id = 0
        }
      }
    } = this.props
    this.props.resetBooks()
    if(id > 0){
      this.props.loadSingleBook({id})
    }
  }

  render(){
    const { book } = this.props

    if(isFirstRender(book)){
      return (
        <div>Cargando..</div>
      )
    }

    return (
      <div className="SingleBook">
        <h1>Detalles de Libro</h1>
        <h2>
          {book[0].title}
        </h2>
        <p>{book[0].description}</p>
        <a>{book[0].url}</a>
        <p>
          <Link to="/library/">Atras</Link>
        </p>
      </div>
    )
  }
}
export default connect(
  state=>({
    book: state.library.book
  }),actions)(Single)
