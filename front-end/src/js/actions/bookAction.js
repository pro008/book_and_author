import axios from 'axios';
import * as BookConstant from '../reducers/book_constant';
import * as UserConstant from '../reducers/user_constant';

export function fetchBooks() {
  return function (dispatch) {
    dispatch({ type: BookConstant.FETCH_BOOKS });
    axios
      .get(`http://localhost:3000/books`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.FETCH_BOOKS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.FETCH_BOOKS_REJECTED, payload: err });
      });
  };
}

export function fetchPublishers() {
  return function (dispatch) {
    dispatch({ type: BookConstant.FETCH_PUBLISHERS });
    axios
      .get(`http://localhost:3000/books/get_publisher`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.FETCH_PUBLISHERS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.FETCH_PUBLISHERS_REJECTED, payload: err });
      });
  };
}


export function updateBook(book_id, book) {
  return function (dispatch) {
    dispatch({ type: BookConstant.CHANGE_BOOK });
    axios
      .patch(`http://localhost:3000/books/${book_id}`, book, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.CHANGE_BOOK_FULFILLED, payload: response.data, id: book_id });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.CHANGE_BOOK_REJECTED, payload: err });
      });
  };
}

export function getBook(book_id) {
  return function (dispatch) {
    dispatch({ type: BookConstant.GET_BOOK });
    axios
      .get(`http://localhost:3000/books/${book_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.GET_BOOK_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.GET_BOOK_REJECTED, payload: err });
      });
  };
}

export function createBook(book) {
  return function (dispatch) {
    dispatch({ type: BookConstant.CREATE_BOOK });
    axios
      .post(`http://localhost:3000/books`, book, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.CREATE_BOOK_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.CREATE_BOOK_REJECTED, payload: err });
      });
  };
}

export function deleteBook(book_id) {
  return function (dispatch) {
    dispatch({ type: BookConstant.DELETE_BOOK });
    axios
      .delete(`http://localhost:3000/books/${book_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: BookConstant.DELETE_BOOK_FULFILLED, payload: book_id });
      })
      .catch((err) => {
        dispatch({ type: BookConstant.DELETE_BOOK_REJECTED, payload: err });
      });
  };
}

export function filterEmail(id) {
  return function (dispatch) {
    dispatch({ type: BookConstant.FILTER_EMAIL, payload: id });
  };
}

export function filterStatus(status) {
  return function (dispatch) {
    dispatch({ type: BookConstant.FILTER_STATUS, payload: status });
  };
}
