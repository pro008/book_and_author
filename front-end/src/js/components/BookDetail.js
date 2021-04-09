import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { updateBook, createBook, getBook } from '../actions';
import Table from './book/Table';
import BookForm from './book/Form';

const BookDetail = (props) => {
  const [isSubmitted, setSubmit] = useState(false);
  const { book_id } = useParams();
  const dispatch = useDispatch();
  const bookReturn = useSelector((state) => state.BookReducer.book);

  useEffect(() => {
    if (book_id) dispatch(getBook(book_id));
  }, [dispatch]);

  const handleSubmit = (values) => {
  	console.log("------------------")
  	console.log(values.publisher_id)
  	if (values.publisher_id == undefined) return;
    if (book_id) dispatch(updateBook(book_id, { book: values }));
    else dispatch(createBook({ book: values }));

    setSubmit(true);
  };

  if (isSubmitted) return <Redirect to={{ pathname: '/' }} />;

  return (
    <div className="wrapper">
      <BookForm onSubmit={handleSubmit} initialValues={book_id ? bookReturn : {}} />
    </div>
  );
};

export default BookDetail;
