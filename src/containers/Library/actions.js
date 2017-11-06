//API
import libaryApi from './api'
// Actions
const LIBRARY_LIST_BOOKS = 'LIBRARY_LIST_BOOKS'
const LIBRARY_SHOW_SINGLE_BOOK = 'LIBRARY_SHOW_SINGLE_BOOK'
const LIBRARY_RESET_BOOKS = 'LIBRARY_RESET_BOOKS'

export function loadBooks(){
  return {
    type: LIBRARY_LIST_BOOKS,
    payload: libaryApi.getAllBooks()
  }
}

export function loadSingleBook(query){
  return {
    type: LIBRARY_SHOW_SINGLE_BOOK,
    payload: libaryApi.getSingleBook(query)
  }
}

export function resetBooks(query){
  return {
    type: LIBRARY_RESET_BOOKS
  }
}
