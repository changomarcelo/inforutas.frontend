import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComentarioForm from './ComentarioForm';

/* Este componente lo hacemos como función, para practicar el otro modo y el uso de los hooks */

function TramoInfo(props) {

  const [tramo, setTramo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(0);
  const [comentando, setComentando] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://localhost:5001/api/Tramos/${props.TramoId}`);

      setTramo(response.data);
      setLoading(false);
      setError(null);
    }
    catch (error){
      setError(error);
      setLoading(false);
    }
  }, [id]);

  if (loading){
    return <p>Loading...</p>;
  }

  if (error != null) {
    return <p>Error: {error}</p>
  }


  return (
    <div className="card">
      <div className="card-body">
        <h3>{tramo.nombre}</h3>
        <p><b>{tramo.fechaInforme}</b></p>
        <p>{tramo.informe}</p>

        { !comentando &&
        <div><button onClick={handleAgregarComentario} className="btn btn-primary">
            Agregar Comentario
          </button></div>
        }

        { comentando &&
          <ComentarioForm />
        }
      </div>
    </div>
  );
}

function handleAgregarComentario(){
  //setComentando(true);
}


export default TramoInfo;