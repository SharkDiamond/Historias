import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import MisHistorias from "./MisHistorias.js";
import CrearHistoria from "./CrearHistoria.js";
import MiPerfil from "./MiPerfil.js";
import Principal from "./Principal.js";
class BarraPrincipal extends Component {
  

salir=()=>{

localStorage.removeItem("Usuario");


}



  render() {
    return (
      <div className="">
     <nav class="navbar navbar-expand-lg navbar-light fondocontenedores fixed-top border-bottom border-dark">
 
   <Link  className="navbar-brand letrasoscuras font-weight-bold" to="./Principal">Principal</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link  className="nav-link letrasoscuras font-weight-bold" to="./MisHistorias">Mis Historias</Link>
      </li>
      <li class="nav-item active">
        <Link  className="nav-link letrasoscuras font-weight-bold" to="./CrearHistoria">Crear Historias</Link>
      </li>
      <li class="nav-item active">
        <Link  className="nav-link letrasoscuras font-weight-bold" to="./MiPerfil">Mi Perfil</Link>
      </li>
      <li class="nav-item active">
       <Link  className="nav-link letrasoscuras font-weight-bold" to="./Buscar">Buscar</Link>
      </li>
   <li class="nav-item active">
       <Link  className="nav-link letrasoscuras font-weight-bold" to="./" onClick={this.salir}>Salir</Link>
      </li>

    </ul>
  </div>

</nav>
    




      </div>
    );
  }
}

export default BarraPrincipal;
