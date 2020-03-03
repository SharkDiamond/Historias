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
historia:[]

}


}

AsignaValorEstado=(etiqueta)=>{


this.setState({

HistoriaBuscada:etiqueta.target.value


})


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


console.log(this.state.Historia);


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

<div className="row bg-danger p-3 ">
<div className="col-12 mb-4 ">
 <form class="form-inline  align-self-center"  onSubmit={this.Buscar}>
      <input class="form-control mr-sm-2" type="search" placeholder="Bucar Historias" onChange={this.AsignaValorEstado} />
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
    </form>
</div>

<div className="col-12">
 <ul>
{

this.state.ListaDeHistorias.map((historia)=>{

return (

<li className="display-4" Style="list-style:none;"><button className="btn btn-lg btn-block btn-primary mb-4" id={historia.idHistoria} onClick={this.MuestraHistoria}>{historia.TituloHistoria}</button></li>


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

<div className="row bg-white justify-content-center rounded">


{

this.state.historia.map((datos)=>{

return(

<div className=" rounded p-3">

<h1 className="text-center"><span className="bg-success rounded">{datos.TituloHistoria}</span> Por  <span className="bg-warning rounded">{datos.UsuarioCreador}</span></h1>
<h2 className=""><span className="bg-danger rounded">{datos.DescripcionBreve}</span></h2>
<div className="p-3 bg-primary rounded" align="center">
<h4 className="text-center text-white">{datos.TextoHistoria}</h4>
</div>


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
