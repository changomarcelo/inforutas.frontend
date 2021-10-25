import React from 'react';
import IconoRN from './IconoRN';
import IconoRP from './IconoRP';
import './styles/RutaInfo.css';

class RutaDetalle extends React.Component {

  state = {
    loading: false,
    error: null,
    data: []
  }

  componentDidMount(){
    
  }

  render() {

    console.log(this.state);
    if (this.state.loading)  {
      return 'Loading...';
    }

    if (this.state.error)  {
      return 'Error: '+ this.state.error;
    }

    return (
      <div className="card">
        <div className="card-body">
          <h1>
          { this.props.Ruta.jurisdiccion === 'AR' &&
            <IconoRN numero={this.props.Ruta.numero} ancho="100" /> 
          }

          { this.props.Ruta.jurisdiccion.includes('AR') && this.props.Ruta.jurisdiccion.length > 2 &&
            <IconoRP numero={this.props.Ruta.numero} jurisdiccion={this.props.Ruta.jurisdiccion} ancho="100" /> 
          }

          &nbsp;{this.props.Ruta.nombre}</h1>
          <p>{this.props.Ruta.descripcion}</p>
        </div>
      </div>
    );
  }
}

export default RutaDetalle;