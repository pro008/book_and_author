import axios from 'axios';
import * as AuthorConstant from '../reducers/author_constant';
import * as UserConstant from '../reducers/user_constant';

export function fetchAuthors() {
  return function (dispatch) {
    dispatch({ type: AuthorConstant.FETCH_AUTHORS });
    axios
      .get(`http://localhost:3000/authors`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: AuthorConstant.FETCH_AUTHORS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: AuthorConstant.FETCH_AUTHORS_REJECTED, payload: err });
      });
  };
}

export function updateAuthor(author_id, author) {
  return function (dispatch) {
    dispatch({ type: AuthorConstant.CHANGE_AUTHOR });
    axios
      .patch(`http://localhost:3000/authors/${author_id}`, author, { withCredentials: true })
      .then((response) => {
        dispatch({ type: AuthorConstant.CHANGE_AUTHOR_FULFILLED, payload: response.data, id: author_id });
      })
      .catch((err) => {
        dispatch({ type: AuthorConstant.CHANGE_AUTHOR_REJECTED, payload: err });
      });
  };
}

export function getAuthor(author_id) {
  return function (dispatch) {
    dispatch({ type: AuthorConstant.GET_AUTHOR });
    axios
      .get(`http://localhost:3000/authors/${author_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: AuthorConstant.GET_AUTHOR_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: AuthorConstant.GET_AUTHOR_REJECTED, payload: err });
      });
  };
}

export function createAuthor(author) {
  return function (dispatch) {
    dispatch({ type: AuthorConstant.CREATE_AUTHOR });
    axios
      .post(`http://localhost:3000/authors`, author, { withCredentials: true })
      .then((response) => {
        dispatch({ type: AuthorConstant.CREATE_AUTHOR_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: AuthorConstant.CREATE_AUTHOR_REJECTED, payload: err });
      });
  };
}

export function deleteAuthor(author_id) {
  return function (dispatch) {
    dispatch({ type: AuthorConstant.DELETE_AUTHOR });
    axios
      .delete(`http://localhost:3000/authors/${author_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: AuthorConstant.DELETE_AUTHOR_FULFILLED, payload: author_id });
      })
      .catch((err) => {
        dispatch({ type: AuthorConstant.DELETE_AUTHOR_REJECTED, payload: err });
      });
  };
}

