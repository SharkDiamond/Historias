import React, { Component } from 'react';
import axios from "axios";

class MiPerfil extends Component {
 

constructor(){
super();


this.state={

DatosUsuario:[]

}


}


 componentDidMount(){
axios.post("http://localhost:8080/Apirest/index.php/Peticion/MIPERFIL",{Usuario:document.getElementById('USUARIO').className})
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


DatosUsuario:response.data


})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });





} 








  render() {
    return (
      <div className="container" >
  
<div className="row d-flex align-items-center">


{

this.state.DatosUsuario.map((datos)=>{

return(

<div className="col-12">
<h1 className="display-1 font-weight-bold text-success">Nombre De Usuario</h1>
<h1 className="display-2 font-weight-bold text-primary">{datos.NombreUsuario}</h1>

<h1 className="display-1 font-weight-bold text-success">Nombre</h1>
<h1 className="display-2 font-weight-bold text-primary">{datos.Nombre}</h1>

<h1 className="display-1 font-weight-bold text-success">Apellido</h1>
<h1 className="display-2 font-weight-bold text-primary">{datos.Apellido}</h1>

</div>



	)





})

}

</div>



      </div>
    );
  }
}

export default MiPerfil;
