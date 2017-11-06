// Dependencies
import React, {Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Actions
import * as actions from './actions'

// utils
import { isFirstRender } from '../../lib/utils/frontend'

class Library extends Component {
  static propType = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
  }

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.resetBooks()
    this.props.loadBooks()
  }

  render(){
    const { books } = this.props
    if(isFirstRender(books)){
      return (
        <div>Cargando..</div>
      )
    }

    return (
      <div className="ListBooks">
        <h1>Lista De Libros</h1>
        <ul>
        {
            books.map((book, key)=>{
              return(
                <li key={key}>
                  <Link to={`/library/${book.pk}`}>{book.title}</Link> - {book.chart_type}
                </li>
              )
            })
        }
        </ul>
      </div>
    )
  }
}

export default connect(
  state=>({
    books: state.library.books
  }),actions)(Library)
