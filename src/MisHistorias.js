import React, { Component } from 'react';
import axios from "axios";


class MisHistorias extends Component {
 

constructor(){
super();


this.state={

DatosHistoria:[]

}


}


obtenerUsuario(){


return document.getElementById('USUARIO').className;

}



  render() {
    


 return (
      <div className="container ">

<div className="row p-4">

<div className="col-4 bg-warning p-4">

<div class="card" >
  <div class="card-body">
    <h5 class="card-title font-weight-bold">Titulo Carta</h5>
    <h6 class="card-subtitle mb-2 font-weight-bold">Descripcion Breve</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link btn bg-danger">Eliminar</a>

  </div>

</div>


</div>





</div>


</div>
   
    );








   
  }


}

export default MisHistorias;
