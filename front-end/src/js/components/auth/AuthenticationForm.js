import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { Button } from 'react-bootstrap';
import asyncValidate from './asyncValidate';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div className="inputGroup">
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input className="registrationInput" {...input} type={type} placeholder={label} />
      <i aria-hidden="true"></i>
      {touched && error && <span className="red">{error}</span>}
    </div>
  </div>
);

const AuthenticationForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  const [isLogin, setRegistry] = useState(true);
  useEffect(() => {
    props.change('ignoreConfirm', true);
  }, []);

  const handleRemoveField = (value) => {
    props.change('ignoreConfirm', value);
    setRegistry(value);
  };

  return (
    <div className="formContainer">
      <div className="regisHeader">
        <h3>{isLogin ? 'Login' : 'Register'}</h3>
      </div>

      <form className="registerForm" onSubmit={handleSubmit}>
        <Field name="email" type="text" component={renderField} label="Email" />

        <Field name="password" type="password" component={renderField} label="Password" />

        {!isLogin && (
          <Field name="confirm_password" type="password" component={renderField} label="Password Confirmation" />
        )}

        <Button className="submitButton btn-warning" type="submit" disabled={submitting}>
          Submit
        </Button>

        <div className="regisBottom">
          <Button className="btn-warning" onClick={() => handleRemoveField(false)}>
            Register
          </Button>
          <Button className="btn-warning" onClick={() => handleRemoveField(true)}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'authForm', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(AuthenticationForm);
