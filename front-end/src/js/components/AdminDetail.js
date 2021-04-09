import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { updateUser, addUser, userStatus } from '../actions';
import Table from './admin/Table';
import BookForm from './admin/Form';

const AdminDetail = (props) => {
  const [isSubmitted, setSubmit] = useState(false);
  const { user_id } = useParams();
  const dispatch = useDispatch();
  const userReturn = useSelector((state) => state.UserReducer.user);

  useEffect(() => {
    if (user_id) dispatch(userStatus(user_id));
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (user_id) dispatch(updateUser(user_id, { user: values }));
    else dispatch(addUser({ user: values }));

    setSubmit(true);
  };

  if (isSubmitted) return <Redirect to={{ pathname: '/users' }} />;

  return (
    <div className="wrapper">
      <BookForm onSubmit={handleSubmit} initialValues={user_id ? userReturn : {}} />
    </div>
  );
};

export default AdminDetail;
