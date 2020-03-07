import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import {Redirect} from "react-router-dom";


class Login extends Component {
 

constructor(){
super();


this.state={

Usuario:"",
Contraseña:"",
pasa:false

}


}


obtenData=(Etiqueta)=>{


this.setState({

[Etiqueta.target.name]:Etiqueta.target.value


})


console.log(this.state.Texto);


}


EnviarDatos=(e)=>{

e.preventDefault();

axios.post("http://localhost:8080/Apirest/index.php/Peticion/Usuarios",{usuario:this.state.Usuario,contraseña:this.state.Contraseña}).then((respuesta)=>{


if (respuesta.data==true) {




localStorage.setItem("Usuario", this.state.Usuario);

this.setState({
pasa:true


})

}


else{

alert("Contraseña o usuario incorrecto");


}



}).catch((error)=>{

console.log(error);


})



}




render(){

if (this.state.pasa==false) {

return (


<div className="container">


<div className="row justify-content-center"> 


<div className="col-12 mb-3">

<h1 className="text-primary font-weight-bold">Bienvenido a historia, por favor introduce tus datos para iniciar sesion</h1>

</div>

<div className="col-6 ">

<div className="bg-primary p-3 rounded">

<form onSubmit={this.EnviarDatos}>
<input type="text" placeholder="Usuario" name="Usuario" onChange={this.obtenData} required/>
<br/>
<br/>
<input type="password" placeholder="Contraseña" name="Contraseña" onChange={this.obtenData} required/>
<br/>
<br/>
<input type="submit" value="Entrar"/>

</form>

</div>

</div>

</div>


</div>



	)



}


else if (this.state.pasa==true) {

return(

	<div>
<Redirect to="/Principal" />
</div>
)
}


}



}
export default Login;