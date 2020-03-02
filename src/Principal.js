import React, { Component } from 'react';

import './App.css';
import BarraPrincipal from "./BarraPrincipal.js";
import axios from "axios";

class Principal extends Component {
  

constructor(){
super();


this.state={

TH:[]

}


}



  componentDidMount(){
axios.get("http://localhost:8080/Apirest/index.php/Peticion/General?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


TH:response.data.Historias


})
console.log("el estado es:");
console.log(this.state.TH);





  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });





} 






  render() {
    return (
      <div className="container">
 
<div className="row">

<div className="col-12 bg-success rounded p-3">

<ol>

{

this.state.TH.map((elemento)=>{

return <li className="display-1 font-weight-bold text-white">{elemento.TituloHistoria}</li>


})

}



</ol>


</div>


</div>



      </div>
    );
  }
}

export default Principal;