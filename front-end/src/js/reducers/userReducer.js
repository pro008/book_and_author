import * as UserConstant from './user_constant';
import { extend } from 'lodash';

export default function userReducer(
  state = {
    loginStatus: 'PENDING',
    user: {},
    users: [],
    message: ''
  },
  action
) {

  if (action.payload && action.payload.status == 401) return { ...state, loginStatus: 'FAILED', message: "LOGIN FAILED" };

  switch (action.type) {
    case UserConstant.FETCH_USERS_FULFILLED:
      return { ...state, users: action.payload.users };
    case UserConstant.LOGGIN_USER_REJECTED:
    case UserConstant.REGISTRY_USER_REJECTED:
      return { ...state, loginStatus: 'FAILED', message: action.payload.message };
    case UserConstant.LOGGIN_USER_FULFILLED:
    case UserConstant.REGISTRY_USER_FULFILLED:
      return { ...state, loginStatus: 'SUCCESS', user: action.payload.user };
    case UserConstant.LOGOUT_USER_FULFILLED:
      return { ...state, user: {}, loginStatus: 'LOGOUT' };
    case UserConstant.USER_STATUS_REJECTED:
      return { ...state, loginStatus: 'FAILED', message: action.payload.message };
    case UserConstant.USER_STATUS_FULFILLED:
      return { ...state, loginStatus: 'SUCCESS', user: action.payload.user };
    case UserConstant.ADD_USER_FULFILLED:
      return { ...state, users: state.users.concat(action.payload.user) };
    case UserConstant.DELETE_USER_FULFILLED: {
      return {
        ...state,
        users: state.users.filter((obj) => {
          return action.payload !== obj.id;
        })
      };
    }
  }

  return state;
}
