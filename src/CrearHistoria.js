import React, { Component } from 'react';
import axios from "axios";
import BarraPrincipal from "./BarraPrincipal.js";

class CrearHistoria extends Component {
 

constructor(){
super();


this.state={

Titulo:"",
Descripcion:"",
Texto:""

}


}


obtenData=(Etiqueta)=>{


this.setState({

[Etiqueta.target.name]:Etiqueta.target.value


})


console.log(this.state.Texto);


}


Envia=(e)=>{

e.preventDefault();

axios.post("http://localhost:8080/Apirest/index.php/Peticion/CREARHISTORIA",{UsuarioCreador:localStorage.getItem("Usuario"),
TituloHistoria:this.state.Titulo,BreveDescripcion:this.state.Descripcion,Texto:this.state.Texto}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN
alert("Historia Creada");






  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });



}


  render() {

if (localStorage.getItem("Usuario")==undefined) {
return (
      <div className="App">

<p className="text-danger display-1">NO INICIO SESION</p>

 </div>

)

}

    return (
      <div className="container">
<BarraPrincipal/>
<div className="row ">

<div className="col-12 fondocontenedores p-4 rounded">

<form onSubmit={this.Envia}>
<h1 className="letrasoscuras font-weight-bold">Titulo</h1>
<input type="text" name="Titulo" className="mb-2" required onChange={this.obtenData} placeholder="Titulo"/>
<br/>
<h1 className="letrasoscuras font-weight-bold">Breve Descripcion</h1>
<input type="text" name="Descripcion" className="mb-2" required onChange={this.obtenData} placeholder="Breve Descripcion"/>
<br/>
<h1 className="letrasoscuras font-weight-bold">Contenido</h1>
<textarea name="Texto" rows="12" cols="80" className="mb-2" required onChange={this.obtenData} placeholder="Describe tu historia"></textarea>

<br/>
<input type="submit" className="btn btn-outline-dark font-weight-bold" value="Crear Historia"/>
</form>


</div>

</div>











</div>
   
    );
  }


}

export default CrearHistoria;
