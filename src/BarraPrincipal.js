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
     <nav class="navbar navbar-expand-lg navbar-light bg-primary">
 
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
        <a class="nav-link text-white font-weight-bold" href="#" tabindex="-1" aria-disabled="true">Salir</a>
      </li>
    </ul>
  </div>

 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Bucar Historias" aria-label="" />
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
    </form>


</nav>
    




      </div>
    );
  }
}

export default BarraPrincipal;
