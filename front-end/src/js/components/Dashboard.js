import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchBooks, createBook } from '../actions';
import Table from './book/Table';
import BookForm from './book/Form';

const Dashboard = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.BookReducer.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(createBook({ book: values }));
  };

  const bookContainer = () => {
    if (_.isEmpty(books)) return <div></div>;

    return (
      <div className="bookContainer">
        <Table books={books} />
      </div>
    );
  };

  return (
    <div className="wrapper">

      <Link to="/book">
        <Button className="btn-warning">Create Book</Button>
      </Link>

      {bookContainer()}
    </div>
  );
};

export default Dashboard;
