import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AuthenticationForm from './auth/AuthenticationForm';
import { submitRegistration, submitLogin, userStatus } from '../actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(userStatus());
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (!values.ignoreConfirm) dispatch(submitRegistration({ user: values }));
    else dispatch(submitLogin({ user: values }));
  };

  if (userState.loginStatus == 'SUCCESS') return <Redirect to={{ pathname: '/' }} />;

  return (
    <div className="LoginPage">
      <div className="LoginPageContainer">
        <AuthenticationForm onSubmit={handleSubmit} />
        <hr></hr>
      	<h4 className="red">{userState.message}</h4>
      </div>
    </div>
  );
};

export default LoginPage;
