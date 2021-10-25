import React from 'react';
import './styles/Layout.css';
import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
      {props.children}
      </div>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">&copy; 2021 - Centraldev, all rights reserved</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;