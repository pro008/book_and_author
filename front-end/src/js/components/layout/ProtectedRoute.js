import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStatus } from '../../actions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(userStatus());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        userState.loginStatus === 'PENDING' || userState.loginStatus === 'SUCCESS' ? (
          <Component {...props} userStatus={userState.loginStatus} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
