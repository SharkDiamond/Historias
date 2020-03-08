<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


     require APPPATH . 'libraries/REST_Controller.php';

class Peticion extends REST_Controller {


   public function __construct() {
               parent::__construct();
              // $this->load->model('user_model');
    

//CARGO LA CONEXION
    $this->load->database();
       }  







  public function General_get(){
      //GENERO LA CONSULA PARA OBTENER TODOS LOS CLIENTES
$consulta1=$this->db->query("select TituloHistoria from historia LIMIT 6");
  

$resultado = array('Historias' => $consulta1->result());
           

//RESPONDO LA SOLUCITUD
           $this->response($resultado); 


//CIERRO LA CONEXION
           $this->db->close();
       }
   


public function MISHISTORIAS_post(){

  $Entrada = json_decode(file_get_contents("php://input"), true); 



$Consulta=$this->db->query("select * from historia where UsuarioCreador='" . $Entrada["Usuario"] . "'");


$this->response($Consulta->result());


//CIERRO LA CONEXION
           $this->db->close();

}


public function ELIMINARHISTORIA_post(){


  $Entrada = json_decode(file_get_contents("php://input"), true); 


$this->db->query("delete from Comentarios where Nhistoria=" . $Entrada["n"]);

$this->db->query("delete from  historia where idHistoria=" . $Entrada["n"]);



$this->response("SE ELIMINO");



//CIERRO LA CONEXION
           $this->db->close();

}




public function CREARHISTORIA_post(){


  $Entrada = json_decode(file_get_contents("php://input"), true); 


$this->db->query("insert into historia values ('','" . $Entrada["TituloHistoria"] . "','" . $Entrada["BreveDescripcion"] . "','" . $Entrada["Texto"] . "',SYSDATE(),'" . $Entrada["UsuarioCreador"] . "')");



$this->response("SE CREO");



//CIERRO LA CONEXION
           $this->db->close();

}


public function MIPERFIL_post(){


  $Entrada = json_decode(file_get_contents("php://input"), true); 


$data=$this->db->query("select * from Usuarios where NombreUsuario='" . $Entrada["Usuario"] . "'");



$this->response($data->result());



//CIERRO LA CONEXION
           $this->db->close();

}


public function BUSCARHISTORIA_post(){



  $Entrada = json_decode(file_get_contents("php://input"), true); 

$data=$this->db->query("select TituloHistoria, idHistoria from historia where TituloHistoria like" . "'" . $Entrada["nombrehistoria"] . "%'");



$this->response($data->result());




}



public function BUSCARHISTORIAESPECIFICA_post(){



  $Entrada = json_decode(file_get_contents("php://input"), true); 

$data=$this->db->query(" select idHistoria, TituloHistoria, DescripcionBreve, UsuarioCreador,TextoHistoria from historia where idHistoria=" . $Entrada["Numero"]);



$this->response($data->result());




}



public function BUSCARCOMENTARIOS_post(){

  $Entrada = json_decode(file_get_contents("php://input"), true); 

$data=$this->db->query("select DescripcionComentario, UsuarioC  from Comentarios where Nhistoria=" . $Entrada["Numero"]);



$this->response($data->result());




}


public function CREARCOMENTARIO_post(){

  $Entrada = json_decode(file_get_contents("php://input"), true); 

$this->db->query("insert into Comentarios values ('','" . $Entrada["contenido"] . "','" . $Entrada["usuario"] . "',SYSDATE()," . $Entrada["Numero"] . ")");



$data=$this->db->query("select DescripcionComentario, UsuarioC  from Comentarios where Nhistoria=" . $Entrada["Numero"]);








$this->response($data->result());




}



public function Usuarios_post(){
 

 $Entrada = json_decode(file_get_contents("php://input"), true); 



$consulta=$this->db->query("select * from  Usuarios where NombreUsuario='" . $Entrada["usuario"] . "' and Contraseña='" . $Entrada["contraseña"] . "'");

$cantidadfilas=$consulta->num_rows();

if ($cantidadfilas!=0) {

  $this->response(true);

}


else{

$this->response(false);


}



}







}
