import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import MisHistorias from "./MisHistorias.js";
import CrearHistoria from "./CrearHistoria.js";
import MiPerfil from "./MiPerfil.js";
import Principal from "./Principal.js";
class BarraPrincipal extends Component {
  render() {
    return (
      <div className="">
     <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
 
   <Link  className="navbar-brand text-white font-weight-bold" to="./">Principal</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link  className="nav-link text-white font-weight-bold" to="./MisHistorias">Mis Historias</Link>
      </li>
      <li class="nav-item">
        <Link  className="nav-link text-white font-weight-bold" to="./CrearHistoria">Crear Historias</Link>
      </li>
      <li class="nav-item">
        <Link  className="nav-link text-white font-weight-bold" to="./MiPerfil">Mi Perfil</Link>
      </li>
      <li class="nav-item">
       <Link  className="nav-link text-white font-weight-bold" to="./Buscar">Buscar</Link>
      </li>
    </ul>
  </div>

</nav>
    




      </div>
    );
  }
}

export default BarraPrincipal;
