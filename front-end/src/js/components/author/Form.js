import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

const AuthorForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="bookForm">
      <label>Admin Form</label>
      <div>
        <Field name="name" component="input" type="text" placeholder="Author Name" />
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
  form: 'authorform',
  enableReinitialize: true
})(AuthorForm);
