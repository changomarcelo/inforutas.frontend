import axios from 'axios';
import React from 'react';
import './styles/RutaDetalle.css';
import RutaInfo from '../components/RutaInfo';
import Tramo from '../components/Tramo';
import TramoInfo from '../components/TramoInfo';


class RutaDetalle extends React.Component {

  state = {
    loading: true,
    error: null,
    ruta: [],
    tramoActivo: null,
    loadingTramo: true,
    errorTramo: null,
  }

  componentDidMount(){
    this.fetchRuta();
  }

  fetchRuta = async () => {
    this.setState({ loading: true, error: null });
    
    try {
      const response = await axios.get(`https://localhost:5001/api/Rutas/${this.props.match.params.id}`);

      this.setState({
        ruta: response.data,
        loading: false
      });
    }
    catch(error){
      this.setState({loading: false, error: error});
    }
  }

  handleTramoClick = (id) => {
    this.fetchTramo(id);
  }

  fetchTramo = async (id) => {
    this.setState( {loadingTramo: true, error: null } );

    try {
      console.log("Id: "+ id);
      const response = await axios.get(`https://localhost:5001/api/Tramos/${id}`);
      this.setState({
        loadingTramo: false,
        errorTramo: null,
        tramoActivo: response.data,
      });
      console.log(this.state.tramoActivo.id);
    }
    catch (error){
      this.setState({errorTramo: error, loadingTramo: false});
    }
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
      <div className="main_content">
        <div className="RutaDetalle__info">
          <RutaInfo Ruta={this.state.ruta} /><br/>
          { this.state.tramoActivo &&
            <div><div>{this.state.tramoActivo.id}</div>
            <TramoInfo TramoId={this.state.tramoActivo.id} /></div>
          }
        </div>
        {this.state.ruta.tramos.length > 0 &&
          <div>
            {this.state.ruta.tramos.map(tramo => {
              return(
                <Tramo key={tramo.id} tramo={tramo} onClick={() => this.handleTramoClick(tramo.id)} />
              );
            })}
          </div>
        }
      </div>
    );
  }
}

export default RutaDetalle;