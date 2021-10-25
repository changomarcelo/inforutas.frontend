import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (

      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand mb-0 h1" to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-bottom" alt=""/>
          InfoRutas
        </Link>
      </nav>

    );
  }
}

export default Navbar;