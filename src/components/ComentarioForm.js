import React from 'react';

class ComentarioForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return(<h3>Agrega un comentario:</h3>);
  }
}

export default ComentarioForm;