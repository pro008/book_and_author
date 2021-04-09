import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAuthor } from '../../actions';

const Table = (props) => {
  const dispatch = useDispatch();
  const authors = props.authors.filter((obj) => {
    return obj.is_show == true;
  });

  const editData = (id) => {
    return <Redirect to={{ pathname: `/author/${id}` }} />;
  };

  const removeData = (id) => {
    dispatch(deleteAuthor(id));
  };

  const renderHeader = () => {
    let headerElement = ['id', 'name', 'operation'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      authors &&
      authors.map(({ id, name }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td className="opration">
              <Link to={{ pathname: `/author/${id}`, state: { id: id } }}>
                <button className="ml10">Edit</button>
              </Link>
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
      <h1 id="title">Authors</h1>
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
