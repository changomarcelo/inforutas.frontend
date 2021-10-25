import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import RutasSearch from '../components/RutasSearch';

class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <RutasSearch />
      </div>
    );
  }
}

export default Home;