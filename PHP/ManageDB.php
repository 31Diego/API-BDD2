<?php
include_once 'DB.php';
class ManageBD extends DB{
  public function getQueries(){
	$pedidos= $this->connect()->query('SELECT * FROM pedidos');
	

	$queries = array (

		"pedidos"=>$pedidos,
		
		
		
	);
	
		return $queries;
	
	}
}
?>