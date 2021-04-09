import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../actions';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const dispatch = useDispatch();
  const users = props.users;

  const editData = (id) => {
    return <Redirect to={{ pathname: `/user/${id}` }} />;
  };

  const removeData = (id) => {
    dispatch(deleteUser(id));
  };

  const renderHeader = () => {
    let headerElement = ['user_name', 'email', 'Role', 'operation'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      users &&
      users.map(({ id, user_name, email, is_admin }) => {
        return (
          <tr key={id}>
            <td>{user_name}</td>
            <td>{email}</td>
            <td>{is_admin ? 'Admin' : 'User'}</td>
            <td className="opration">
              <button className="ml10" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">Users</h1>
      <table id="CustomTable">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
