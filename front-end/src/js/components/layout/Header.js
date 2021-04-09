import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../actions';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <Navbar className="App-header">
      <Link className="App-link" to="/">
        <b>Phong</b> | Project
      </Link>
      <Nav className="mr-auto" />
      <Nav>
        <div className="right-navigation">
          <Button className="btn-warning" onClick={handleLogoutClick}>
            Logout
          </Button>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
