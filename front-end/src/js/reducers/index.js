import { combineReducers } from 'redux';

import UserReducer from './userReducer';
import BookReducer from './bookReducer';
import AuthorReducer from './authorReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  UserReducer,
  BookReducer,
  AuthorReducer,
  form: formReducer
});
