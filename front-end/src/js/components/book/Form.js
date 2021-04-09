import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPublishers, fetchAuthors } from '../../actions';

const BookForm = (props) => {
  const { handleSubmit, submitting } = props;
  const dispatch = useDispatch();
  const publishers = useSelector((state) => state.BookReducer.publishers);
  const authors = useSelector((state) => state.AuthorReducer.authors);

  useEffect(() => {
    dispatch(fetchPublishers());
    dispatch(fetchAuthors());
  }, [dispatch]);

  const renderSelection = () => {
    return (
      publishers &&
      publishers.map(({ id, name }) => {
        return (
        	<option key={id} value={id}>{name}</option>
        );
      })
    );
  };

  const renderAuthor = () => {
    return (
      authors &&
      authors.map(({ id, name }) => {
        return (
        	<option key={id} value={id}>{name}</option>
        );
      })
    );
  };


  return (
    <form onSubmit={handleSubmit} className="bookForm">
      <label>Book Form</label>
      <div>
        <Field name="title" component="input" type="text" placeholder="Title" />

        <Field name="description" component="textarea" type="text" rows="6" placeholder="description" />

        <div>
          <label>Publisher</label>
          <div>
            <Field name="publisher_id" component="select">
            	<option value=""></option>
              {renderSelection()}
            </Field>
          </div>
        </div>

        <div>
          <label>Author</label>
          <div>
            <Field name="author_id" component="select">
            	<option value=""></option>
              {renderAuthor()}
            </Field>
          </div>
        </div>

      </div>
      <Button type="submit" className="btn-warning">
        Submit
      </Button>

      <Link to="/">
        <Button className="btn-warning">Cancel</Button>
      </Link>
    </form>
  );
};

export default reduxForm({
  form: 'bookform',
  enableReinitialize: true
})(BookForm);
