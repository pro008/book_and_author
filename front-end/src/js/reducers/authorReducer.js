import * as AuthorConstant from './author_constant';
import { extend } from 'lodash';

const filterByType = (element, id, status) => {
  if ((element.user_id == id || id == '') && (element.status == status || status == '')) return true;

  return false;
};

export default function authorReducer(
  state = {
    authors: [],
    author: {}
  },
  action
) {
  if (action.payload && action.payload.status == 401) return { ...state, loginStatus: 'FAILED', message: 'FAILED' };

  let new_authors = [];
  switch (action.type) {
    case AuthorConstant.FETCH_AUTHORS:
      return { ...state, authors: [] };
    case AuthorConstant.GET_AUTHOR_FULFILLED:
      return { ...state, author: action.payload.author };
    case AuthorConstant.FETCH_AUTHORS_FULFILLED:
      new_authors = action.payload.authors.map((e) => {
        e.is_show = true;
        return e;
      });
      return { ...state, authors: new_authors };
    case AuthorConstant.CHANGE_AUTHOR_FULFILLED:
      action.payload.author.is_show = true;
      return { ...state, authors: state.authors.map((obj) => (obj.id == action.id ? action.payload.author : obj)) };
    case AuthorConstant.DELETE_AUTHOR_FULFILLED:
      return {
        ...state,
        authors: state.authors.filter((obj) => {
          return action.payload !== obj.id;
        })
      };
    case AuthorConstant.CREATE_AUTHOR_FULFILLED:
      action.payload.author.is_show = true;
      return { ...state, authors: state.authors.concat(action.payload.author) };
  }

  return state;
}
