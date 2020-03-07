import React, { Component } from 'react';
import Principal from "./Principal.js";
import './App.css';
import BarraPrincipal from "./BarraPrincipal.js";
import MisHistorias from "./MisHistorias.js";
import CrearHistoria from "./CrearHistoria.js";
import MiPerfil from "./MiPerfil.js";
import BuscarHistoria from "./BuscarHistoria.js";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Login from "./Login.js";


class App extends Component {
 




  render() {
  

if (localStorage.getItem("Usuario")!==undefined) {
return (
      <div className="App">

 <Router>



<br/>
<br/>
<br/>
<br/>


<Route path="/" exact component={Login}/>
<Route path="/Principal" exact component={Principal}/>
<Route path="/MisHistorias" exact component={MisHistorias}/>

<Route path="/CrearHistoria" exact component={CrearHistoria}/>
<Route path="/MiPerfil" exact component={MiPerfil}/>
<Route path="/Buscar" exact component={BuscarHistoria}/>

 </Router>
 
 <p className={this.props.Usuario} id="USUARIO"></p>

      </div>
    );


}
    

else if (localStorage.getItem("Usuario")==undefined) {

return (
      <div className="App">
<Redirect to="/" />
</div>
      );
}


  }
}

export default App;
