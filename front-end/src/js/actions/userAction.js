import axios from 'axios';
import * as UserConstant from '../reducers/user_constant';

export function fetchUsers() {
  return function (dispatch) {
    dispatch({ type: UserConstant.FETCH_USERS });
    axios
      .get(`http://localhost:3000/users`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.FETCH_USERS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.FETCH_USERS_REJECTED, payload: err });
      });
  };
}

export function submitRegistration(user) {
  return function (dispatch) {
    dispatch({ type: UserConstant.REGISTRY_USER });
    axios
      .post(`http://localhost:3000/users`, user, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.REGISTRY_USER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.REGISTRY_USER_REJECTED, payload: err });
      });
  };
}

export function addUser(user) {
  return function (dispatch) {
    dispatch({ type: UserConstant.ADD_USER });
    axios
      .post(`http://localhost:3000/users`, user)
      .then((response) => {
        dispatch({ type: UserConstant.ADD_USER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.ADD_USER_REJECTED, payload: err });
      });
  };
}

export function updateUser(user_id, user) {
  return function (dispatch) {
    dispatch({ type: UserConstant.UDATE_USER });
    axios
      .patch(`http://localhost:3000/users/${user_id}`, user, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.UDATE_USER_FULFILLED, payload: response.data, id: user_id });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.UDATE_USER_REJECTED, payload: err });
      });
  };
}

export function deleteUser(user_id) {
  return function (dispatch) {
    dispatch({ type: UserConstant.DELETE_USER });
    axios
      .delete(`http://localhost:3000/users/${user_id}`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.DELETE_USER_FULFILLED, payload: user_id });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.DELETE_USER_REJECTED, payload: err });
      });
  };
}

export function submitLogin(user) {
  return function (dispatch) {
    dispatch({ type: UserConstant.LOGGIN_USER });
    axios
      .post(`http://localhost:3000/sessions`, user, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.LOGGIN_USER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.LOGGIN_USER_REJECTED, payload: err });
      });
  };
}

export function userLogout() {
  return function (dispatch) {
    dispatch({ type: UserConstant.LOGOUT_USER });
    axios
      .delete(`http://localhost:3000/sessions/loggout`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.LOGOUT_USER_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.LOGOUT_USER_REJECTED, payload: err });
      });
  };
}

export function userStatus() {
  return function (dispatch) {
    dispatch({ type: UserConstant.USER_STATUS });
    axios
      .get(`http://localhost:3000/sessions/`, { withCredentials: true })
      .then((response) => {
        dispatch({ type: UserConstant.USER_STATUS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: UserConstant.USER_STATUS_REJECTED, payload: err });
      });
  };
}
