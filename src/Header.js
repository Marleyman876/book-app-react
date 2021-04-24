import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './LogoutButton'
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {!this.props.isLoggedIn ? '' : <LogoutButton />}
      </Navbar>
    );
  }
}

export default Header;
