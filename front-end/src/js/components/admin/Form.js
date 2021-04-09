import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

const UserForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="bookForm">
      <label>Admin Form</label>
      <div>
        <Field name="user_name" component="input" type="text" placeholder="User Name" />

        <Field name="email" component="input" type="text" placeholder="Email" />

        <Field name="password" component="input" type="password" placeholder="Passowrd" />
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
  form: 'userform',
  enableReinitialize: true
})(UserForm);
