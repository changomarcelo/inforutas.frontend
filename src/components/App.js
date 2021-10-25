import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RutaDetalle from '../pages/RutaDetalle';
import Layout from './Layout';
import '../global.css';


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rutas/:id" component={RutaDetalle} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
