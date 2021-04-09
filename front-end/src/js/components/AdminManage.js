import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchUsers, createBook } from '../actions';
import Table from './admin/Table';
import BookForm from './admin/Form';

const AdminManage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(createBook({ user: values }));
  };

  const userContainer = () => {
    if (_.isEmpty(users)) return <div></div>;

    return (
      <div className="userContainer">
        <Table users={users} />
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Link to="/user">
        <Button className="btn-warning">Create User</Button>
      </Link>
      {userContainer()}
    </div>
  );
};

export default AdminManage;
