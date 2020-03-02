import React, { Component } from 'react';
import axios from "axios";


class CrearHistoria extends Component {
 

constructor(){
super();


this.state={

DatosHistoria:[]

}


}


  render() {
    return (
      <div className="container">

<div className="row ">

<div className="col-12 bg-primary p-4 rounded">

<form>
<h1 className="text-white font-weight-bold">Titulo</h1>
<input type="text" className="mb-2"/>
<br/>
<h1 className="text-white font-weight-bold">Breve Descripcion</h1>
<input type="text" className="mb-2" />
<br/>
<h1 className="text-white font-weight-bold">Contenido</h1>
<textarea name="textarea" rows="12" cols="80" className="mb-2">Write something here</textarea>

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
