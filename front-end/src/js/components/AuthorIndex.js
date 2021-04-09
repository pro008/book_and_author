import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchAuthors, createAuthor } from '../actions';
import Table from './author/Table';
import AuthorForm from './author/Form';

const AuthorIndex = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.AuthorReducer.authors);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(createAuthor({ author: values }));
  };

  const authorContainer = () => {
    if (_.isEmpty(authors)) return <div></div>;

    return (
      <div className="authorContainer">
        <Table authors={authors} />
      </div>
    );
  };

  return (
    <div className="wrapper">

      <Link to="/author">
        <Button className="btn-warning">Create Author</Button>
      </Link>

      {authorContainer()}
    </div>
  );
};

export default AuthorIndex;
