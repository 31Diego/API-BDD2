<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

<<<<<<< HEAD
	$clientes= $this->connect()->query('SELECT * FROM clientes');
	$empleados= $this->connect()->query('SELECT * FROM empleados');
	$pedidos= $this->connect()->query('SELECT * FROM pedidos');
	$productos= $this->connect()->query('SELECT * FROM productos');
	


	$queries = array (
		"clientes" =>$clientes,
		"empleados"=>$empleados,
		"pedidos"=>$pedidos,
		"productos"=>$productos,
		
=======
	
	

	$queries = array (
>>>>>>> 8df51e6b0a7c3157ccbe7a8da09ff9ac6ec49e5d
		
	);
	
		return $queries;
	
	}
}
?>