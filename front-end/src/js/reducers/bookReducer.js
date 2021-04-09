import * as BookConstant from './book_constant';
import { extend } from 'lodash';

const filterByType = (element, id, status) => {
  if ((element.user_id == id || id == '') && (element.status == status || status == '')) return true;

  return false;
};

export default function bookReducer(
  state = {
    books: [],
    book: {},
    publishers: [],
    filter_id: '',
    filter_status: ''
  },
  action
) {
  if (action.payload && action.payload.status == 401) return { ...state, loginStatus: 'FAILED', message: 'FAILED' };

  let new_books = [];
  switch (action.type) {
    case BookConstant.FETCH_BOOKS:
      return { ...state, books: [] };
    case BookConstant.GET_BOOK_FULFILLED:
      return { ...state, book: action.payload.book };
    case BookConstant.FETCH_BOOKS_FULFILLED:
      new_books = action.payload.books.map((e) => {
        e.is_show = true;
        return e;
      });
      return { ...state, books: new_books };
    case BookConstant.FETCH_PUBLISHERS:
      return { ...state, publishers: [] };
    case BookConstant.FETCH_PUBLISHERS_FULFILLED:
      return { ...state, publishers: action.payload.publishers };
    case BookConstant.CHANGE_BOOK_FULFILLED:
      action.payload.book.is_show = true;
      return { ...state, books: state.books.map((obj) => (obj.id == action.id ? action.payload.book : obj)) };
    case BookConstant.DELETE_BOOK_FULFILLED:
      return {
        ...state,
        books: state.books.filter((obj) => {
          return action.payload !== obj.id;
        })
      };
    case BookConstant.CREATE_BOOK_FULFILLED:
      action.payload.book.is_show = true;
      return { ...state, books: state.books.concat(action.payload.book) };
    case BookConstant.FILTER_EMAIL:
      new_books = state.books.map((e) => {
        e.is_show = filterByType(e, action.payload, state.filter_status);
        return e;
      });

      return { ...state, filter_id: action.payload, books: new_books };
    case BookConstant.FILTER_STATUS:
      new_books = state.books.map((e) => {
        e.is_show = filterByType(e, state.filter_id, action.payload);
        return e;
      });

      return { ...state, filter_status: action.payload, books: new_books };
  }

  return state;
}
