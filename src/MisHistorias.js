import React, { Component } from 'react';
import axios from "axios";


class MisHistorias extends Component {
 

constructor(){
super();


this.state={

DatosCartas:[]

}

this.volverApedir=this.volverApedir.bind(this);
}


obtenerUsuario=()=>{


return document.getElementById('USUARIO').className;

}



volverApedir(){

axios.post("http://localhost:8080/Apirest/index.php/Peticion/MISHISTORIAS?format=json",{Usuario:document.getElementById('USUARIO').className})
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


DatosCartas:response.data


})




  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });



}




EliminarHistoria=(e)=>{

var idH=e.target.id;

axios.post("http://localhost:8080/Apirest/index.php/Peticion/ELIMINARHISTORIA",{Numero:idH}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN
this.volverApedir();


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });







}


  componentDidMount(){
axios.post("http://localhost:8080/Apirest/index.php/Peticion/MISHISTORIAS?format=json",{Usuario:document.getElementById('USUARIO').className})
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


DatosCartas:response.data


})


console.log(this.state.DatosCartas);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });





} 







  render() {
    


 return (
      <div className="container ">

<div className="row p-4 rounded">


{this.state.DatosCartas.map((Elemento)=>{


return(

<div className="col-4  p-2 rounded ">

<div class="card bg-white border border-warning ">
  <div class="card-body">
    <h5 class="card-title font-weight-bold">{Elemento.TituloHistoria}</h5>
    <h6 class="card-subtitle mb-2 font-weight-bold">Descripcion Breve</h6>
    <p class="card-text">{Elemento.DescripcionBreve}</p>
    <button href="#" class="card-link btn bg-danger" id={Elemento.idHistoria} onClick={this.EliminarHistoria}>Eliminar</button>

  </div>


</div>

</div>

  )



})}










</div>


</div>
   
    );








   
  }


}

export default MisHistorias;
