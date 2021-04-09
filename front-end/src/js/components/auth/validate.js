const validate = (values) => {
  const errors = {};
  let regex_username = /[^a-zA-Z0-9]/; // contains special character
  let regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // at least 1 uper 1 lower 1 number
  let regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) errors.email = 'Required';
  else if (!regex_email.test(values.email)) errors.email = 'Email is not correct, exp: phong.vuong008@gmai.com';

  if (!values.password) errors.password = 'Required';
  else if (!regex_password.test(values.password)) errors.password = 'Password should contain 1 uper 1 lower 1 number';

  if (!values.confirm_password && !values.ignoreConfirm) {
    errors.password = 'Required';
  } else if (values.password != values.confirm_password) {
    errors.confirm_password = 'Password and confirm Password does not match';
  }

  return errors;
};

export default validate;
