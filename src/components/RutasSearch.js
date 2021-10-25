import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/RutasSearch.css';
import IconoRN from './IconoRN';
import IconoRP from './IconoRP';

class Rutas extends React.Component {

  state = {
    loading: true,
    error: null,
    data: [],
    dataAMostrar: []
  }

  componentDidMount(){
    this.fetchRutas();
  }

  fetchRutas = async () => {
    this.setState({ loading: true, error: null });
    
    try {
      const response = await axios.get('https://localhost:5001/api/Rutas');

      this.setState({
        data: response.data,
        loading: false,
        dataAMostrar: response.data
      });
    }
    catch(error){
      this.setState({loading: false, error: error});
    }
  }

  filtrarRutas = e => {
    this.setState({
      dataAMostrar: this.state.data.filter((d) => {
        return d.nombre.toUpperCase().includes(e.target.value.toUpperCase());
      } )
    })
  }

  render() {
    if (this.state.loading) {
      return 'Loading...';
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div className="Rutas__component">
        <form>
          <input onChange={this.filtrarRutas} type="search" className="form-control" />
        </form>
        <div className="Rutas__resultados">
          {this.state.dataAMostrar.map(ruta => {
            return(
                <span className="Rutas__resultados">
                  <Link to={`/rutas/${ruta.id}`}>
                    {ruta.jurisdiccion === 'AR' &&
                      <IconoRN numero={ruta.numero} ancho="48" className="Rutas__Icono" />
                    }
                    {ruta.jurisdiccion.includes('AR') && ruta.jurisdiccion.length > 2 &&
                      <IconoRP numero={ruta.numero} ancho="48" className="Rutas__Icono" />
                    }
                  </Link>
                </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Rutas;