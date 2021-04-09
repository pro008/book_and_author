import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default ({ children }) => {
  const SlideBar = () => {
    return (
      <div className="sidebar">
        <ul className="nav-bar-left">
          <li>
            <Link className="active" to="/">
              Book
            </Link>
          </li>
          <li>
            <Link to="/authors">Author</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app">
        {SlideBar()}
        <div className="content content-is-open">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
