<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){

	$clientes= $this->connect()->query('SELECT * FROM clientes');
	$empleados= $this->connect()->query('SELECT * FROM empleados');
	$pedidos= $this->connect()->query('SELECT * FROM pedidos');
	$productos= $this->connect()->query('SELECT * FROM productos');
	


	$queries = array (
		"clientes" =>$clientes,
		"empleados"=>$empleados,
		"pedidos"=>$pedidos,
		"productos"=>$productos,
		
		
	);
	
		return $queries;
	
	}
}
?>