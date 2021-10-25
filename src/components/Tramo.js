import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCity } from '@fortawesome/free-solid-svg-icons'
import './styles/Tramo.css';

class Tramo extends React.Component {
  render() {
    return(
      <div className="Tramo__recuadro"  onClick={this.props.onClick}>
        <div className="Tramo__icono"><FontAwesomeIcon icon={faCity} /> {this.props.tramo.nombre}</div>
        <div className="Tramo__texto">
          
          {this.props.tramo.pdIs.map(pdi => {
            return (
              <div className="text-left" key={pdi.id}>
                <FontAwesomeIcon icon={faMapMarker} /> {pdi.nombre}
              </div>)
          })}
        </div>
        <div className="Tramo__asfalto">&nbsp;</div>
      </div>
    );
  }
}

export default Tramo;