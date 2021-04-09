import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { updateAuthor, createAuthor, getAuthor } from '../actions';
import Table from './admin/Table';
import AuthorForm from './author/Form';

const AuthorDetail = (props) => {
  const [isSubmitted, setSubmit] = useState(false);
  const { author_id } = useParams();
  const dispatch = useDispatch();
  const authorReturn = useSelector((state) => state.AuthorReducer.author);

  useEffect(() => {
    if (author_id) dispatch(getAuthor(author_id));
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (author_id) dispatch(updateAuthor(author_id, { author: values }));
    else dispatch(createAuthor({ author: values }));

    setSubmit(true);
  };

  if (isSubmitted) return <Redirect to={{ pathname: '/authors' }} />;

  return (
    <div className="wrapper">
      <AuthorForm onSubmit={handleSubmit} initialValues={author_id ? authorReturn : {}} />
    </div>
  );
};

export default AuthorDetail;
