import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../actions';

const Table = (props) => {
  const dispatch = useDispatch();
  const books = props.books.filter((obj) => {
    return obj.is_show == true;
  });

  const editData = (id) => {
    return <Redirect to={{ pathname: `/book/${id}` }} />;
  };

  const removeData = (id) => {
    dispatch(deleteBook(id));
  };

  const renderHeader = () => {
    let headerElement = ['id', 'title', 'Author Name', 'Publisher', 'operation'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      books &&
      books.map(({ id, title, author_name, publisher_name }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author_name}</td>
            <td>{publisher_name}</td>
            <td className="opration">
              <Link to={{ pathname: `/book/${id}`, state: { id: id } }}>
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
      <h1 id="title">Books</h1>
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
