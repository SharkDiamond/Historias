import React, { Component } from 'react';

import './App.css';

import axios from "axios";


class BuscarHistoria extends Component {
 



constructor(){
super();


this.state={

HistoriaBuscada:"",
ListaDeHistorias:[],
MostrarHistoria:false,
historia:[],
comentariosh:[],
idh:null,
HistoriaBuscada:"",
contenido:""

}


}

AsignaValorEstado=(etiqueta)=>{


this.setState({

[etiqueta.target.id]:etiqueta.target.value


})



}

vuelveBuscar=()=>{

this.setState({


MostrarHistoria:false

})


}


EnviarComentario=(e)=>{

e.preventDefault();

axios.post("http://localhost:8080/Apirest/index.php/Peticion/CREARCOMENTARIO",{Numero:this.state.idh,
usuario:document.getElementById('USUARIO').className,contenido:this.state.contenido}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


conmentariosh:response.data,
MostrarHistoria:true

})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });




axios.post("http://localhost:8080/Apirest/index.php/Peticion/BUSCARCOMENTARIOS",{Numero:this.state.idh}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


comentariosh:response.data


})





  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });







}


MuestraHistoria=(e)=>{




this.setState({

MostrarHistoria:true



})



axios.post("http://localhost:8080/Apirest/index.php/Peticion/BUSCARHISTORIAESPECIFICA",{Numero:e.target.id}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


historia:response.data


})


this.state.historia.map((datos)=>{

this.setState({

idh:datos.idHistoria

})


});

console.log(this.state.idh);
  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });





axios.post("http://localhost:8080/Apirest/index.php/Peticion/BUSCARCOMENTARIOS",{Numero:e.target.id}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


comentariosh:response.data


})





  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });









}



Buscar=(e)=>{

e.preventDefault();

axios.post("http://localhost:8080/Apirest/index.php/Peticion/BUSCARHISTORIA",{nombrehistoria:this.state.HistoriaBuscada}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


ListaDeHistorias:response.data

})





  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("PROBLEMA");
    console.log(error);
    //alert(error);
  });







}




  render() {


  	if (this.state.MostrarHistoria==false) {

 return (

      <div className="container ">

<div className="row fondocontenedores p-3 ">
<div className="col-12 mb-4 ">
 <form class="form-inline  align-self-center"  onSubmit={this.Buscar}>
      <input class="form-control mr-sm-2" type="search" placeholder="Bucar Historias" onChange={this.AsignaValorEstado} id="HistoriaBuscada" required/>
      <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
    </form>
</div>

<div className="col-12">
 <ul>
{

this.state.ListaDeHistorias.map((historia)=>{

return (

<li className="display-4" Style="list-style:none;"><button className="btn btn-lg btn-block fondo mb-4" id={historia.idHistoria} onClick={this.MuestraHistoria}><span className="text-white">{historia.TituloHistoria}</span></button></li>


)


})

}
</ul>


</div>


</div>

      </div>
    );

  	}
   


if (this.state.MostrarHistoria==true) {

return (

 <div className="container">

<div className="row fondocontenedores justify-content-center rounded">


{

this.state.historia.map((datos)=>{




return(

<div className=" rounded p-3">

<h1 className="text-center d-inline"><span className="bg-success rounded">{datos.TituloHistoria}</span> Por  <span className="bg-warning rounded">{datos.UsuarioCreador}</span></h1><button className="btn btn-outline-danger ml-4" onClick={this.vuelveBuscar} Style="position:fixed; top:113px; right:300px;">X</button>
<h2 className=""><span className="bg-danger rounded">{datos.DescripcionBreve}</span></h2>
<div className="p-3 bg-dark rounded" align="center">
<h4 className="text-center text-white">{datos.TextoHistoria}</h4>


</div>


{

this.state.comentariosh.map((datos)=>{

return(


<div className="mt-3 mb-3 p-2 fondo rounded-pill">

<p className="text-justify font-weight-bold text-white">{datos.DescripcionComentario}</p>


</div>




)


})


}



<form className="mt-3" onSubmit={this.EnviarComentario}>
<textarea rows="8" cols="70" required placeholder="Comentar" id="contenido" onChange={this.AsignaValorEstado}></textarea>
<br/>
<br/>
<button className="btn btn-success">Enviar</button>
</form>


</div>





)



})

}

</div>

      </div>
    


    );




}





  }




}



export default BuscarHistoria;
